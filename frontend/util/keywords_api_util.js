export const fetchKeywords = () => {
    return $.ajax({
        method: "GET",
        url: `api/keywords`
    });
};

export const fetchKeyword = (id) => {
    return $.ajax({
        method: "GET",
        url: `api/keywords/${id}`
    });
};
