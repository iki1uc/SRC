export function RUN3() {

    const triList = Object.values(TRI);

    triList.forEach(tri => {

        switch (tri.module) {

            case "TRI_BOOMERANG":   // 3
                TRI_BOOMERANG(tri);
                break;

            case "WIRBEL_ABFUHR":   // 4
                WIRBEL_ABFUHR(tri);
                break;

            case "ECHO_HALL":       // 1 & 2
                ECHO_HALL_CHECK(tri);
                break;

            case "TMP_BALANCE":     // 5
                TMP_BALANCE(tri);
                break;

            case "TMP_CONTROL":     // 6
                TMP_CONTROL(tri);
                break;
        }
    });

    AXIOM_LEARN(triList);

    return triList.map(tri => ({
        id: tri.id,
        name: tri.name,
        role: tri.role,
        echo: tri.tmp * 0.3,
        hall: tri.re * 0.2,
        missing: ECHO_HALL_CHECK(tri).missing
    }));
}
