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
RESPO_STATION.details = function() {
    return {
        name: this.name,
        form: this.data.form,
        struktur: this.data.struktur,
        verhalten: this.data.verhalten,
        präsenz: this.data.präsenz,
        degree: this.degree,
        fulfillment: this.fulfillment,
        manifest: this.manifest().manifest
    };
};
console.log(RESPO_STATION.details());
RESPO_STATION.visual = function() {
    return `
[RESPO]
 ├─ Form: ${this.data.form}
 ├─ Struktur: ${this.data.struktur}
 ├─ Verhalten: ${this.data.verhalten}
 └─ Präsenz: ${this.data.präsenz}
`;
};
console.log(RESPO_STATION.visual());
RESPO_STATION.final = function() {
    return {
        station: this.name,
        status: "FINAL",
        degree: this.degree,
        fulfillment: this.fulfillment,
        manifest: this.manifest()
    };
};
console.log(RESPO_STATION.final());
RESPO_STATION.doc = function() {
    return `
RESPO Station Dokumentation
---------------------------
Name: ${this.name}
Form: ${this.data.form}
Struktur: ${this.data.struktur}
Verhalten: ${this.data.verhalten}
Präsenz: ${this.data.präsenz}

Degree: ${this.degree}
Fulfillment: ${this.fulfillment}
Manifest: ${this.manifest().manifest}
`;
};
console.log(RESPO_STATION.doc());
