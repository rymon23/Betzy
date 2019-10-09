import StoreShow from "./shop_show";
import { connect } from 'react-redux';
import { fetchStore } from '../../actions/store_actions';
import { deleteProduct, fetchProducts } from '../../actions/product_actions';
import { fetchCategories } from '../../actions/category_actions';
import { getCurrentUser } from "../../util/helpers_util";
import { selectProductsByStore, selectCategoriesByProducts } from "../../reducers/selector_reducer";
import { fetchAllUsers } from "../../actions/user_actions";

const mapStateToProps = (state, ownProps) => {
    const currentUser = getCurrentUser(state);
    const storeId = ownProps.match.params.storeId;
    const store = state.entities.stores[storeId];
    const products = selectProductsByStore(state.entities.products, storeId);
    const categories = selectCategoriesByProducts(state.entities.categories, products);
    const currentUserId = state.session.currentUser.id;
    const users = Object.values(state.entities.users) || [];
    debugger

    return {
        store,
        storeId,
        currentUserId,
        products,
        categories,
        currentUser,
        users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchStore: (id) => dispatch(fetchStore(id)),
        fetchProducts: () => dispatch(fetchProducts()),
        deleteProduct: (id) => dispatch(deleteProduct(id)),
        fetchCategories: () => dispatch(fetchCategories()),
        fetchAllUsers: () => dispatch(fetchAllUsers())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreShow);
