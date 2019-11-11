export const fetchSearchResults = (search_query) => {
    return $.ajax({
        method: 'GET',
        url: 'api/search_results',
        data: { search_query }
    });
};