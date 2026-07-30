export async function SRC_RetrievalAPI(source) {
    if (source.endsWith(".json")) {
        return await fetch(source).then(r => r.json());
    }

    if (source.endsWith(".raw") || source.endsWith(".txt")) {
        return await fetch(source).then(r => r.text());
    }

    if (source.endsWith(".hdf")) {
        return { hdf: "HDF‑Daten geladen (Mock)", file: source };
    }

    return { error: "Unbekannte Quelle", file: source };
}
