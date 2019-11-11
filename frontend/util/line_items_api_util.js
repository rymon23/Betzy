export const fetchLineItems = (userId) => {
    return $.ajax({
        method: "GET",
        url: `api/users/${userId}/line_items`
    })
}
export const deleteLineItem = (userId, lineItemId) => {
    return $.ajax({
        method: "DELETE",
        url: `api/users/${userId}/line_items/${lineItemId}`
    });
}
export const createLineItem = (userId, lineItem) => {
    return $.ajax({
        method: "POST",
        url: `api/users/${userId}/line_items`,
        lineItem: lineItem,
    });
}
export const updateLineItem = (userId, lineItem) => {
    return $.ajax({
        method: "PATCH",
        url: `api/users/${userId}/line_items/${lineItem.id}`,
        lineItem: lineItem,
    });
}
