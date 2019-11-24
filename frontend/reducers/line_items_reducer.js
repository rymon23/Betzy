import {
    RECEIVE_ALL_LINE_ITEMS,
    RECEIVE_LINE_ITEM,
    REMOVE_LINE_ITEM
} from "../actions/line_item_actions";

const lineItemsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_LINE_ITEMS:
            return Object.assign({}, action.lineItems);

        case RECEIVE_LINE_ITEM:
            return Object.assign({}, state, { [action.lineItem.id]: action.lineItem });

        case REMOVE_LINE_ITEM:
            debugger
            const newState = Object.assign({}, state);
            delete newState[action.lineItemId];
            return newState;

        default:
            return state;
    }
};

export default lineItemsReducer;