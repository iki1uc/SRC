let axiomTryCount = 0;

export function AXIOM_TRY(y, x, z, q, f, d) {

    axiomTryCount++;

    // Virtuelle Adresse erzeugen
    const virtualAddress = "AX-" + Date.now() + "-" + axiomTryCount;

    // Real/Irreal Bewertung
    const realScore = (y + x + z + q + f + d) / 6;
    const isReal = realScore > 0.5 ? "REAL" : "IRREAL";

    // Bericht für jeden 3er
    const reportNeeded = axiomTryCount % 3 === 0;

    const report = reportNeeded
        ? `Bericht #${axiomTryCount}: Adresse ${virtualAddress} ist ${isReal}.`
        : null;

    return {
        virtualAddress,
        isReal,
        report
    };
}
