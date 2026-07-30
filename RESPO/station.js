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
import { SRC_RetrievalAPI } from "../api/retrieval.js";
import { SRC_SearchAPI } from "../api/search.js";
import { SRC_ChatAPI } from "../api/chat.js";
