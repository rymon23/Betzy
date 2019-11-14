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
export const createLineItem = (line_item) => {
    return $.ajax({
        method: "POST",
        url: `api/products/${line_item.product_id}/line_items`,
        data: { line_item }
    });
}
export const updateLineItem = (lineItem) => {
    return $.ajax({
        method: "PATCH",
        url: `api/users/${lineItem.user_id}/line_items/${lineItem.id}`,
        data: { line_item }
    });
}
