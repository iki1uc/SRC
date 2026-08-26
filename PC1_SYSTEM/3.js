export function TRI_BOOMERANG(tri) {
    const overflow = tri.tmp - 1.2;
    if (overflow > 0) {
        tri.tmp -= overflow * 0.7;
        return overflow * 0.3;
    }
    return 0;
}
