import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from "../../actions/product_actions";
import { fetchStore } from '../../actions/store_actions';
import { getCurrentUser, getCurrentUserId } from "../../util/helpers_util";

const mapStateToProps = (state, ownProps) => {
    const product = state.entities.products[ownProps.match.params.productId];
    const store = state.entities.stores[ownProps.match.params.storeId];
    const currentUser = getCurrentUser(state);
    const currentUserId = getCurrentUserId(currentUser);
    debugger

    return {
        product,
        store,
        currentUserId
    }
}

const mapDispatchToProps = dispatch => ({
    fetchProduct: (id) => dispatch(fetchProduct(id)),
    fetchStore: (id) => dispatch(fetchStore(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);

