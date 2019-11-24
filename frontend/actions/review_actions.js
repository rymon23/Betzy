import * as APIUtil from "../util/reviews_api_util";

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

const receiveAllReviews = (reviews) => {
    return {
        type: RECEIVE_ALL_REVIEWS,
        reviews
    }
};
const receiveReview = (review) => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
};
const removeReview = () => {
    return {
        type: REMOVE_REVIEW,
    }
};

export const fetchReviews = () => (dispatch) => {
    return APIUtil.fetchReviews()
        .then((reviews) => dispatch(receiveAllReviews(reviews)))
};
export const fetchReview = (id) => (dispatch) => {
    return APIUtil.fetchReview(id)
        .then((review) => dispatch(receiveReview(review)))
};
export const createReview = (review) => (dispatch) => {
    return APIUtil.createReview(review)
        .then((review) => dispatch(receiveReview(review)))
};
export const updateReview = (review) => (dispatch) => {
    return APIUtil.updateReview(review)
        .then((review) => dispatch(receiveReview(review)))
};
export const deleteReview = (reviewId) => (dispatch) => {
    return APIUtil.deleteReview(reviewId)
        .then((review) => dispatch(removeReview(review.id)))
};
