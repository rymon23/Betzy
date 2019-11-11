import * as APIUtil from "../util/line_items_api_util";

export const RECEIVE_ALL_LINE_ITEMS = "RECEIVE_ALL_LINE_ITEMS";
export const RECEIVE_LINE_ITEM = "RECEIVE_LINE_ITEM";
export const REMOVE_LINE_ITEM = "REMOVE_LINE_ITEM";


const receiveAllLineItems = (lineItems) => {
    return {
        type: RECEIVE_ALL_LINE_ITEMS,
        lineItems
    }
};
const receiveLineItem = (lineItem) => {
    return {
        type: RECEIVE_LINE_ITEM,
        lineItem
    }
};
const removeLineItem = () => {
    return {
        type: REMOVE_LINE_ITEM,
    }
};

export const fetchLineItems = () => (dispatch) => {
    return APIUtil.fetchLineItems()
        .then((lineItems) => dispatch(receiveAllLineItems(lineItems)))
};
export const createLineItem = (lineItem) => (dispatch) => {
    return APIUtil.createLineItem(lineItem)
        .then((lineItem) => dispatch(receiveLineItem(lineItem)))
};
export const updateLineItem = (lineItem) => (dispatch) => {
    return APIUtil.updateLineItem(lineItem)
        .then((lineItem) => dispatch(receiveLineItem(lineItem)))
};
export const deleteLineItem = (lineItemId) => (dispatch) => {
    return APIUtil.deleteLineItem(lineItemId)
        .then((lineItem) => dispatch(removeLineItem()))
};
