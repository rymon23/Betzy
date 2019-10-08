import { connect } from 'react-redux';
import { fetchCategories } from '../../actions/category_actions';
import { fetchStores } from '../../actions/store_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import { fetchProducts } from '../../actions/product_actions';

import HomePage from './homepage';

const mapStateToProps = (state) => {
    const currentUser = state.session.currentUser; 
    return {
      currentUser
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchStores: () => dispatch(fetchStores()),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchProducts: () => dispatch(fetchProducts()),    
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
