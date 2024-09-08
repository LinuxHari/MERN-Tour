export const generateQueryParams = (params: Record<string, string | number>): string => {
    const queryParams = new URLSearchParams();

    for (const [key, value] of Object.entries(params)) {
        queryParams.append(key, String(value));
    }

    return queryParams.toString();
};