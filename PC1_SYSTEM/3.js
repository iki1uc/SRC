export function TRI_BOOMERANG(tri) {
    const overflow = tri.tmp - 1.2; // max TMP
    if (overflow > 0) {
        tri.tmp -= overflow * 0.7;     // 70% zurückwerfen
        return overflow * 0.3;         // 30% Restimpuls
    }
    return 0;
}
