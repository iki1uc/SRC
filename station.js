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
        }
    };
}
