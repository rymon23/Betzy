export const fetchReviews = (productId) => {
    return $.ajax({
        method: 'GET',
        url: `api/products/${productId}/reviews`
    })
};

export const fetchReview = (review) => {
    return $.ajax({
        method: 'GET',
        url: `api/reviews/${review.id}`
    })
};

export const deleteReview = (reviewId) => (
    $.ajax({
        method: 'DELETE',
        url: `api/reviews/${reviewId}`
    })
);

export const createReview = (review, productId) => (
    $.ajax({
        method: 'POST',
        url: `api/products/${productId}/reviews`,
        data: { review: review }
    })
);

export const updateReview = (review) => (
    $.ajax({
        method: 'PATCH',
        url: `api/reviews/${review.id}`,
        data: { review: review }
    })
);
