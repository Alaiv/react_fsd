export const getQueryParams = (params: OptionalRecord<string, string>) => {
    const searchParams = new URLSearchParams(window.location.search);

    Object.entries(params).forEach(([key, value]) => {
        if (value) {
            searchParams.set(key, value);
        }
    });

    return `?${searchParams.toString()}`;
};

export const setSearchParams = (params: Record<string, string>) => {
    window.history.pushState(null, '', getQueryParams(params));
};
