import { 
    RECEIVE_ALL_REVIEWS, 
    RECEIVE_REVIEW ,
    REMOVE_REVIEW
    } from "../actions/review_actions";

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_REVIEWS:
            return Object.assign({}, action.reviews);

        case RECEIVE_REVIEW:
            return Object.assign({}, state,
                { [action.review.id]: action.review});

        case REMOVE_REVIEW:
            const newState = Object.assign({}, state);
            delete newState[action.reviewId];
            return newState;

        default:
            return state;
    }
};

export default reviewsReducer;