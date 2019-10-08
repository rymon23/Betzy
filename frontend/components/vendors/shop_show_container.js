import StoreShow from "./shop_show";
import { connect } from 'react-redux';
import { fetchStore } from '../../actions/store_actions';
import { deleteProduct, fetchProducts } from '../../actions/product_actions';
import { fetchCategories } from '../../actions/category_actions';
import { getCurrentUser, getStoreCategories, getStoreProducts } from "../../util/helpers_util";

const mapStateToProps = (state, ownProps) => {
    const currentUser = getCurrentUser(state);
    const storeId = ownProps.match.params.storeId;
    const store = state.entities.stores[storeId];
    const products = state.entities.products || [];
    const categories = state.entities.categories || [];
    const currentUserId = state.session.currentUser.id;

    debugger

    return {
        store,
        storeId,
        currentUserId,
        products,
        categories,
        currentUser
    }
}

const mapDispatchToProps = dispatch => ({
    fetchStore: id => dispatch(fetchStore(id)),
    fetchProducts: () => dispatch(fetchProducts()),
    deleteProduct: id => dispatch(deleteProduct(id)),
    fetchCategories: () => dispatch(fetchCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(StoreShow);
