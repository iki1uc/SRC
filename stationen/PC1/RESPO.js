import { SIX } from "./CONNECT.js";
import { ROOT_NORM } from "./CONNECT.js";
import { MOVE } from "./MOVE.js";

export const RESPO = {
    react(station, root) {

        MOVE(station);        // spontane Moves
        ROOT_NORM(root, station); // Norm ohne Kontrolle

        const s = SIX(station);

        return {
            role: station.role,
            effizienz: s.effizienz,
            wohlbefinden: s.wohlbefinden,
            bindung: station.re * station.kraft
        };
    }
};
