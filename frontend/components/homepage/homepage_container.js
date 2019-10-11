import { connect } from 'react-redux';
import { fetchCategories } from '../../actions/category_actions';
import { fetchStores } from '../../actions/store_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import { fetchProducts } from '../../actions/product_actions';
import { sampleProducts } from "../../reducers/selector_reducer";

import HomePage from './homepage';

const mapStateToProps = (state) => {
    const currentUser = state.session.currentUser;
    const products = sampleProducts(state.entities.products, 18);
    return {
      currentUser,
      products
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
