import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from "../../actions/product_actions";
import { fetchStore } from '../../actions/store_actions';
import { createLineItem, fetchLineItem } from '../../actions/line_item_actions';
import { getCurrentUser, getCurrentUserId } from "../../util/helpers_util";

const mapStateToProps = (state, ownProps) => {
    const productId = ownProps.match.params.productId;
    const product = state.entities.products[productId];
    const store = state.entities.stores[ownProps.match.params.storeId];
    const lineItem = state.entities.lineItems[productId];
    const currentUser = getCurrentUser(state);
    const currentUserId = getCurrentUserId(currentUser);

    debugger

    return {
        product,
        store,
        lineItem,
        currentUserId,
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchProduct: (id) => dispatch(fetchProduct(id)),
    fetchStore: (id) => dispatch(fetchStore(id)),
    createLineItem: (lineItem) => dispatch(createLineItem(lineItem)),
    fetchLineItem: (userId, productId) => dispatch(fetchLineItem(userId, productId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);

