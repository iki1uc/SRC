export function ECHO_HALL_CHECK(tri) {
    const echo = tri.tmp * 0.3;
    const hall = tri.re * 0.2;

    const missing = [];
    if (tri.tmp < 0.8) missing.push("TMP fehlt");
    if (tri.ra  < 0.8) missing.push("Reaktion fehlt");
    if (tri.re  < 0.8) missing.push("Resonanz fehlt");

    return { echo, hall, missing };
}
