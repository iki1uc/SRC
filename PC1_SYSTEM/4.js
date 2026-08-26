export function WIRBEL_ABFUHR(tri) {
    if (tri.tmp > 1.2) {
        tri.tmp -= (tri.tmp - 1.2) * 0.5;
        tri.ra  *= 0.9;
        tri.re  *= 0.9;
    }
}
