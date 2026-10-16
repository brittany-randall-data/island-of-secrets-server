export const EXPLORERS = [
 {id:'kai',name:'Kai',role:'The unexpected guest',regret:'No regret is written in her invitation. Only an instruction: MAKE SURE IT HAPPENS.',invitation:'MAKE SURE IT HAPPENS.',color:'#b48752',skin:'#885735'},
 {id:'daniel',name:'Daniel',role:'Civil engineer',regret:'He accepted the opportunity of a lifetime and left a relationship behind.',invitation:'The train has not left yet. You can still choose.',color:'#4f7682',skin:'#b17c55'},
 {id:'simone',name:'Simone',role:'Photographer',regret:'She was chasing an assignment when her father needed her for the last time.',invitation:'There is still time to get home.',color:'#936a68',skin:'#643d2c'},
 {id:'rafael',name:'Rafael',role:'Teacher',regret:'He gave up a scholarship to support his family. He wonders whose life he would have lived.',invitation:'The unopened letter is waiting.',color:'#687e4c',skin:'#b78054'},
 {id:'evelyn',name:'Evelyn',role:'Former journalist',regret:'She printed a story before listening to the person whose life it changed.',invitation:'One page. One correction. Everything can change.',color:'#806b90',skin:'#d0a37d'},
 {id:'noah',name:'Noah',role:'Paramedic',regret:'He concealed a mistake and lost the trust of his closest friend.',invitation:'This time, tell the truth.',color:'#a67546',skin:'#674c39'}
] as const;
export type ExplorerId = typeof EXPLORERS[number]['id'];
export const CLUES = {
 record:{title:'The threshold rubbing',text:'A rubbing names THE CHAMBER OF TOMORROWS. “Here may be seen the life a different choice would have made. The bearer may ask that it become real.” Beneath it: “The present has its keepers.” Six empty spaces surround the inscription.',question:'Who is meant to keep the present?',x:-4,z:40},
 inscription:{title:'The divided inscription',text:'“One must witness. One must act. Hold the memory while the other turns the stone.” The west recess reveals what the east mechanism cannot see. The marks resemble the threshold doors, but their order changes.',question:'Why must the person acting trust someone else’s memory?',x:0,z:70}
} as const;
export const ARTIFACT_REACTIONS:Record<ExplorerId,Record<keyof typeof CLUES,string>> = Object.fromEntries(EXPLORERS.map(e=>[e.id,{record:e.id==='kai'?'“My invitation never offered me a different life.”':`“They know what I came here to ask.”`,inscription:'“We will have to tell each other what we can see.”'}])) as Record<ExplorerId,Record<keyof typeof CLUES,string>>;
export const OBJECTIVES = ['Read your invitation.','Seek the Chamber of Tomorrows.','Explore the Corridor of Doors.','Cross the walkway and decide the Sealed Record.','Open the divided gate together.','Reunite at the photographs.'];
export const SYMBOLS = ['SUN','TIDE','LEAF','MOON'];
export const INTRO = ['Six vehicles. Six invitations. An island absent from every map.','Beyond the ancient jungle lies the Chamber of Tomorrows.','Somewhere inside, another version of your life is waiting.'];
export const DOOR_RIDDLE = 'Yesterday is remembered. Tomorrow is imagined. What passes between them?';
export const DOORS = {
 hourglass:{name:'Hourglass',type:'progression',x:0,z:34,width:5},
 moon:{name:'Moon',type:'memory',x:-11,z:30,width:4},
 sun:{name:'Sun',type:'consequence',x:11,z:30,width:4},
 secret:{name:'The hidden seam',type:'secret',x:-18,z:43,width:3},
 forbidden:{name:'The forbidden threshold',type:'forbidden',x:18,z:43,width:3}
} as const;
export type DoorId=keyof typeof DOORS;
export const LIGHT_ORDER=['DUSK','DAWN','NOON'] as const;
export const PHOTO_TEXT = [
 {name:'Daniel',year:'1998',text:'A railway platform. A younger Daniel turns away. A woman watches from the edge of the frame.'},
 {name:'Simone',year:'2006',text:'A hospital corridor. An unopened camera bag. The same woman appears in the reflection.'},
 {name:'Rafael',year:'1989',text:'A kitchen table and a scholarship letter. A familiar woman stands behind the doorway.'},
 {name:'Evelyn',year:'2001',text:'A newspaper office. A correction lies unsigned. The same woman waits outside the editor’s door.'},
 {name:'Noah',year:'2014',text:'An ambulance in rain. Two friends. The woman is visible in an upstairs window.'},
 {name:'Kai',year:'TOMORROW',text:'Kai stands before a door that none of you have opened. Beneath it: “Some futures are worth protecting.”'}
];
