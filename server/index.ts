import {PRIVATE_MEMORY,invitationFor} from './private-story.js';
import {EXPLORERS,type ExplorerId} from '../shared/story.js';
import express from 'express';
import { createServer } from 'node:http';
import { Server, Room, Client } from '@colyseus/core';
import { WebSocketTransport } from '@colyseus/ws-transport';
import { newState,addPlayer,advanceIntro,move,interact,view,PROTOCOL, type Snapshot } from '../shared/game.js';
import { randomInt } from 'node:crypto';
export class IslandRoom extends Room { world:Snapshot=newState(); maxClients=6; inputs=new Map<string,{x:number;z:number;at:number}>();
 onCreate(){this.setPrivate(true);const code=Array.from({length:6},()=> 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'[randomInt(32)]).join('');this.setMetadata({code});this.onMessage('input',(client,data)=>{if(typeof data?.x==='number'&&typeof data?.z==='number')this.inputs.set(client.sessionId,{x:Math.max(-1,Math.min(1,data.x)),z:Math.max(-1,Math.min(1,data.z)),at:Date.now()});});
 this.onMessage('interact',(client,data)=>{if(typeof data?.action!=='string')return;const result=interact(this.world,client.sessionId,data.action,String(data.value||'').slice(0,20));client.send('notice',result);this.sync();});
 this.onMessage('chat',(client,data)=>{const p=this.world.players[client.sessionId];if(!p||typeof data!=='string')return;this.world.messages.push({name:p.name,text:data.slice(0,240)});this.world.messages=this.world.messages.slice(-30);this.sync();});
 this.setSimulationInterval(()=>{for(const id of Object.keys(this.world.players))advanceIntro(this.world,id,.05);for(const [id,input]of this.inputs){const active=Date.now()-input.at<300;move(this.world,id,active?input.x:0,active?input.z:0,.05);}this.sync();},50);}
 onJoin(client:Client,options:any){const identity=String(options.explorer||'kai') as ExplorerId;const e=EXPLORERS.find(e=>e.id===identity);if(!e)throw Error('Unknown explorer');addPlayer(this.world,client.sessionId,String(options.name||'Explorer'),identity,{invitation:invitationFor(identity,e.regret,e.invitation),memory:PRIVATE_MEMORY[identity]});client.send('code',this.metadata.code);this.sync();}
 sync(){for(const c of this.clients)c.send('snapshot',view(this.world,c.sessionId));}
 async onLeave(client:Client,consented:boolean){this.inputs.delete(client.sessionId);const p=this.world.players[client.sessionId];if(!p)return;p.connected=false;p.moving=false;this.sync();try{if(consented)throw Error('left');await this.allowReconnection(client,45);p.connected=true;this.sync();}catch{delete this.world.players[client.sessionId];this.sync();}}
}
const app=express();app.use(express.json());app.use((req,res,next)=>{res.setHeader('Access-Control-Allow-Origin','*');res.setHeader('Access-Control-Allow-Headers','Content-Type');if(req.method==='OPTIONS'){res.sendStatus(204);return;}next();});
const http=createServer(app);const game=new Server({transport:new WebSocketTransport({server:http})});game.define('island',IslandRoom);
app.get('/health',(_req,res)=>res.json({ok:true,game:'island',version:'0.2.0',protocol:PROTOCOL}));
app.get('/rooms/:code',async(req,res)=>{const {matchMaker}=await import('@colyseus/core');const rooms=await matchMaker.query({name:'island'});const found=rooms.find(r=>r.metadata?.code===req.params.code.toUpperCase());if(!found){res.status(404).json({error:'Room not found. Check the code or ask your host to create a new room.'});return;}res.json({roomId:found.roomId});});
app.use(express.static('dist'));
const port=Number(process.env.PORT||2567);await game.listen(port);console.log(`Island server listening on ${port}`);
