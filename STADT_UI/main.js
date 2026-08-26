import { MARKET } from "../PC1_SYSTEM/station.js";
import { RESPO } from "../PC1_SYSTEM/RESPO.js";

export function updateUI() {

    for (const name in MARKET) {

        const result = RESPO.react(MARKET[name]);

        setText(`${name}_role`, result.role);
        setText(`${name}_ra`, result.ra);
        setText(`${name}_re`, result.re);
        setText(`${name}_kraft`, result.kraft);
        setText(`${name}_eff`, result.effizienz.toFixed(2));
        setText(`${name}_well`, result.wohlbefinden.toFixed(2));
        setText(`${name}_bind`, result.bindung.toFixed(2));
        setText(`${name}_freude`, result.freude.toFixed(2));
        setText(`${name}_treue`, result.treue.toFixed(2));
    }
}

function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.innerText = value;
}
