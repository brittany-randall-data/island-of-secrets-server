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
 ticket:{title:'A bus ticket · 1978',text:'ROUTE 06 • ONE WAY • 17 OCT 1978. The destination has been rubbed away. A woman’s silhouette is printed faintly on the reverse. The paper is dry, although the trunk around it is soaked.',x:-5,z:14},
 manifest:{title:'Six passages',text:'A shipping ledger lists six passages paid in advance. The names are yours. Beneath them, someone wrote: “Arrival is a choice. What follows is not.”',x:6,z:25},
 record:{title:'A record without a date',text:'“Do not mistake a door for a second chance. A life is not a solitary event.” The rest of the document is sealed beneath the temple crest.',x:-4,z:39},
 inscription:{title:'The divided inscription',text:'“One must witness. One must act. Hold the memory while the other turns the stone.” A viewing platform lies west of the temple mechanism. Two living witnesses are required.',x:0,z:70}
} as const;
export const OBJECTIVES = ['Search the beach for the invitation’s first clue.','Follow the jungle path. Find the abandoned records.','Cross the unstable walkway and investigate the sealed record.','Two explorers: one holds the viewing platform; another enters the symbols at the east mechanism.','The gate is open. Reunite inside the antechamber.','Chapter One complete. The island has kept its secrets.'];
export const SYMBOLS = ['SUN','TIDE','LEAF','MOON'];
export const INTRO = ['Six strangers accepted six invitations. Each envelope held an image that should not have existed.','Five were offered a chance to undo a decision. One received only an instruction.','An unmapped island. A boat with no return schedule. No one asked why the others had come.','DON’T OPEN THAT DOOR'];
export const PHOTO_TEXT = [
 {name:'Daniel',year:'1998',text:'A railway platform. A younger Daniel turns away. A woman watches from the edge of the frame.'},
 {name:'Simone',year:'2006',text:'A hospital corridor. An unopened camera bag. The same woman appears in the reflection.'},
 {name:'Rafael',year:'1989',text:'A kitchen table and a scholarship letter. A familiar woman stands behind the doorway.'},
 {name:'Evelyn',year:'1978',text:'A bus shelter. Route 06. A woman holds a ticket with its destination rubbed away.'},
 {name:'Noah',year:'2014',text:'An ambulance in rain. Two friends. The woman is visible in an upstairs window.'},
 {name:'Kai',year:'TOMORROW',text:'Kai stands before a door that none of you have opened. Beneath it: “Some futures are worth protecting.”'}
];
