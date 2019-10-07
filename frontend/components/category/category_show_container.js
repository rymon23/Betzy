import { connect } from "react-redux";
import { fetchCategory } from "../../actions/category_actions";
import CategoryShow from "./category_show";
import { fetchStores } from "../../actions/store_actions";
import { fetchProducts } from '../../actions/product_actions';

const mapStateToProps = (state, ownProps)=> {
    return {
        category: state.entities.categories[ownProps.match.params.categoryId],
        stores: state.entities.stores,
        products: state.entities.products
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCategory: id => dispatch(fetchCategory(id)),
        fetchStores: () => dispatch(fetchStores()),
        fetchProducts: () => dispatch(fetchProducts())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryShow);