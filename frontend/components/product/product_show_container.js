import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from "../../actions/product_actions";
import { fetchStore } from '../../actions/store_actions';
// import { addToCart, fetchCartItems } from '../../actions/cart_items_actions';

const mapStateToProps = (state, ownProps) => {
    const product = state.entities.products[ownProps.match.params.productId];
    const shop = state.entities.shops[ownProps.match.params.shopId];
    const currentUserId = state.session.id;
    return {
        product,
        shop,
        currentUserId
    }
}

const mapDispatchToProps = dispatch => ({
    fetchProduct: (id) => dispatch(fetchProduct(id)),
    fetchStore: id => dispatch(fetchStore(id)),
    // addToCart: cartItem => dispatch(addToCart(cartItem)),
    // fetchCartItems: () => dispatch(fetchCartItems())
    // create cart item
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);

