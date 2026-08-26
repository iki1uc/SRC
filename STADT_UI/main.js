import { MARKET } from "../PC1_SYSTEM/station.js";
import { RESPO } from "../PC1_SYSTEM/RESPO.js";

export function updateUI() {
    Object.keys(MARKET).forEach(m => {
        const r = RESPO.react(MARKET[m]);

        document.getElementById(`${m}_role`).innerText = r.role;
        document.getElementById(`${m}_eff`).innerText = r.effizienz.toFixed(2);
        document.getElementById(`${m}_well`).innerText = r.wohlbefinden.toFixed(2);
        document.getElementById(`${m}_bind`).innerText = r.bindung.toFixed(2);
    });
}

