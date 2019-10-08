import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from "../../actions/product_actions";
import { fetchStore } from '../../actions/store_actions';

const mapStateToProps = (state, ownProps) => {
    debugger
    const product = state.entities.products[ownProps.match.params.productId];
    const store = state.entities.stores[ownProps.match.params.storeId];
    const currentUserId = state.session.currentUser.id;
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

