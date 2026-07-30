export function SRC_SearchAPI(query, dataset) {
    const results = [];

    for (const key in dataset) {
        const value = dataset[key]?.toString() || "";
        if (value.includes(query)) {
            results.push({ key, value });
        }
    }

    return {
        query,
        results,
        count: results.length
    };
}
