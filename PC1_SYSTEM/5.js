export function ECHO_HALL_CHECK(tri) {

    // Echo = direkte TMP‑Resonanz
    const echo = tri.tmp * 0.3;

    // Hall = tiefe RE‑Resonanz
    const hall = tri.re * 0.2;

    // Fehlende Energie‑Komponenten
    const missing = [];

    if (tri.tmp < 0.8) missing.push("TMP fehlt");
    if (tri.ra  < 0.8) missing.push("Reaktion fehlt");
    if (tri.re  < 0.8) missing.push("Resonanz fehlt");

    return {
        id: tri.id,
        name: tri.name,
        role: tri.role,
        echo,
        hall,
        missing
    };
}
