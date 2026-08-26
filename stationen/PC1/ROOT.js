import { MARKET } from "./station.js";
import { RESPO } from "./RESPO.js";
import { pipelineblitzCluster } from "./pipelineblitzCluster.js";

export function SYSTEM_START() {
    console.log("PC1_SYSTEM + PC Cluster aktiviert.");

    // ⭐ 1. Markt-System einmalig starten
    Object.keys(MARKET).forEach(m => {
        const r = RESPO.react(MARKET[m]);
        console.log("MARKET:", m, r);
    });

    // ⭐ 2. Cluster-Blitz dauerhaft starten
    setInterval(() => {
        pipelineblitzCluster();
    }, 1000); // 1x pro Sekunde
}
