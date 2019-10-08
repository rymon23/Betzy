import { connect } from "react-redux";
import { fetchCategory } from "../../actions/category_actions";
import CategoryShow from "./category_show";
import { fetchStores } from "../../actions/store_actions";
import { fetchProducts } from '../../actions/product_actions';

const mapStateToProps = (state, ownProps)=> {
    const stores = Object.values(state.entities.stores) || [];
    const products = Object.values(state.entities.products) || [];

    return {
        category: state.entities.categories[ownProps.match.params.categoryId],
        stores,
        products
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCategory: (id) => dispatch(fetchCategory(id)),
        fetchStores: () => dispatch(fetchStores()),
        fetchProducts: () => dispatch(fetchProducts())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryShow);