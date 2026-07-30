export const SRC = {
    continuum: true,

    körperisieren(form, struktur, verhalten, präsenz) {
        return {
            form,
            struktur,
            verhalten,
            präsenz,
            degree: 360,
            fulfillment: 100,
            manifest: "körperisiert"
     import { SRC } from "./src.js";

import form from "./Koerperisierung/form/f.md";
import struktur from "./Koerperisierung/Struktur/s.md";
import verhalten from "./Koerperisierung/Verhalten/v.md";
import präsenz from "./Koerperisierung/Präsenz/p.md";

const körper = SRC.körperisieren(form, struktur, verhalten, präsenz);

        
        };
    }
};
