export function ROOT_NORM(root, station) {
    // Root gibt nur Norm-Impulse
    station.tmp = (station.tmp + root.tmp) / 2;
    station.ra  = (station.ra  + root.ra)  / 2;
    station.re  = (station.re  + root.re)  / 2;
    station.kraft = (station.kraft + root.kraft) / 2;
}
