import StoreShow from "./shop_show";
import { connect } from 'react-redux';
import { fetchStore } from '../../actions/store_actions';
import { deleteProduct, fetchProducts } from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => {
    const storeId = ownProps.match.params.storeId;
    const store = state.entities.stores[storeId];
    const currentUserId = state.session.currentUser.id;
    const products = state.entities.products || [];
    return {
        store,
        currentUserId,
        products
    }
}

const mapDispatchToProps = dispatch => ({
    fetchStore: id => dispatch(fetchStore(id)),
    fetchProducts: () => dispatch(fetchProducts()),
    deleteProduct: id => dispatch(deleteProduct(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(StoreShow);
