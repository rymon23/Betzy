import React from 'react'
import { connect } from 'react-redux';
import { fetchReviews } from '../../actions/review_actions';
import { selectAllReviews } from '../../reducers/selector_reducer';

class ReviewsIndex extends React.Component {
    componentDidMount(){


    }

    
    render(){


    }
}


const mapStateToProps = state => {
    return {
        reviews: selectAllReviews(state.entities.reviews)
    };
};
const mapDispatchToProps = dispatch => {
    return {
        fetchReviews: (productId) => dispatch(fetchReviews(productId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsIndex);