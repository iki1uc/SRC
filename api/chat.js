export function SRC_ChatAPI(message, context = {}) {
    return {
        input: message,
        response: `AGENT antwortet auf: ${message}`,
        context
    };
}
