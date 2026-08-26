export function RUN3(y, x, z, q, f, d) {

    const triList = [TRI.y, TRI.x, TRI.z, TRI.q, TRI.f, TRI.d];

    triList.forEach(tri => {
        WIRBEL_ABFUHR(tri);
        TRI_BOOMERANG(tri);
    });

    AXIOM_LEARN(triList);

    return triList.map(tri => ({
        name: tri.name,
        echo: tri.tmp * 0.3,
        hall: tri.re * 0.2,
        missing: ECHO_HALL_CHECK(tri).missing
    }));
}
