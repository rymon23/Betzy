import ShopShow from "./shop_show";
import { connect } from 'react-redux';
import { fetchStore } from '../../actions/store_actions';
import { deleteProduct, fetchProducts } from '../../actions/product_actions';
// import { selectShopProducts } from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
    const shopId = ownProps.match.params.shopId;
    const shop = state.entities.shops[shopId];
    const currentUserId = state.session.id;
    // const products = selectShopProducts(state.entities.products, shopId);
    const products = state.entities.products;
    return {
        shop,
        currentUserId,
        products
    }
}

const mapDispatchToProps = dispatch => ({
    fetchStore: id => dispatch(fetchStore(id)),
    fetchProducts: () => dispatch(fetchProducts()),
    deleteProduct: id => dispatch(deleteProduct(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopShow);
