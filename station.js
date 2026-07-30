export function Station(name, data) {
    return {
        name,
        data,
        degree: 360,
        fulfillment: 100,

        act() {
            return `${this.name} wirkt im SRC‑Continuum`;
        },

        manifest() {
            return {
                station: this.name,
                form: data.form,
                struktur: data.struktur,
                verhalten: data.verhalten,
                präsenz: data.präsenz,
                manifest: "körperisiert",
                degree: 360,
                fulfillment: 100
            };
        },

        doc2() {
            return `
${this.name} – Station Dokumentation (SRC‑Imperium)
============================================

Form:
${this.data.form}

Struktur:
${this.data.struktur}

Verhalten:
${this.data.verhalten}

Präsenz:
${this.data.präsenz}

Degree: ${this.degree}
Fulfillment: ${this.fulfillment}
Manifest: ${this.manifest().manifest}

Verbindungen:
- Achsenfeld: SDSA
- Operator: CO
- Priorität: PQ
- Prozess: PP

Status: FINALISIERT
`;
        }
    };
}
