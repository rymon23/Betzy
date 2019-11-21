import { connect } from "react-redux";

import CartIndex from "./cart_index";
import { fetchLineItems } from "../../actions/line_item_actions";
import { fetchStores } from "../../actions/store_actions";
import { fetchProducts } from '../../actions/product_actions';
import { selectProductsByLineItems } from "../../reducers/selector_reducer";
import { objectValuesArray } from "../../util/helpers_util";

const mapStateToProps = (state, ownProps) => {
    const lineItems = objectValuesArray(state.entities.lineItems);
    const products = state.entities.products;
    const stores = state.entities.stores;
    debugger
    
    return {
        lineItems,
        stores,
        products
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchLineItems: () => dispatch(fetchLineItems()),
        fetchStores: () => dispatch(fetchStores()),
        fetchProducts: () => dispatch(fetchProducts())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIndex);