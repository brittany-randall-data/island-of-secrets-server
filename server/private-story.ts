// Private narrative payloads are server-owned and excluded from the browser bundle.
import type {ExplorerId} from '../shared/story.js';
export const PRIVATE_MEMORY:Record<ExplorerId,string>={
 kai:'A handprint appears above yours, although no one is standing there. Beneath it: “Keep the place beside you.”',
 daniel:'The departure board changes. Someone has kept the seat beside you empty. You cannot see their face.',
 simone:'A camera shutter clicks. In this version of the corridor, the hospital room door is still open.',
 rafael:'The letter is open now. A second name has been written beneath your own, then carefully covered.',
 evelyn:'You lift an unpublished correction. One sentence has been underlined: “Ask her before you print it.”',
 noah:'A radio repeats the words you never said. A second voice answers: “I would have stayed.”'
};
export function invitationFor(explorer:ExplorerId,motivation:string,phrase:string){return explorer==='kai'?'Welcome, Kai. The Chamber of Tomorrows is waiting. MAKE SURE IT HAPPENS.':`Welcome. You have reached the island. ${motivation} The Chamber of Tomorrows may reveal the future a different decision would have made—and offer you the chance to make it real. ${phrase}`;}
