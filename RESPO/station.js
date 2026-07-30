import { Station } from "../station.js";
import o from "./o.md";
import a from "./a.md";
import r from "./r.md";

export const RESPO_STATION = Station("RESPO", {
    form: o,
    struktur: a,
    verhalten: r,
    präsenz: "RESPO‑Anker"
});
console.log(RESPO_STATION.data.form);
console.log(RESPO_STATION.data.struktur);
console.log(RESPO_STATION.data.verhalten);
console.log(RESPO_STATION.data.präsenz);
