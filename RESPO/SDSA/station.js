import { Station } from "../station.js";
import B from "./B.md";
import H from "./H.md";
import T from "./T.md";

export const SDSA_STATION = Station("SDSA", {
    form: B,
    struktur: H,
    verhalten: T,
    präsenz: "Achsenfeld"
});
