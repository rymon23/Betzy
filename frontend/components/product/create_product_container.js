import { connect } from "react-redux";
import ProductForm from "./product_form";
import { createProduct } from "../../actions/product_actions";
import { objectValuesArray } from "../../util/helpers_util";

const mapStateToProps = (state, ownProps) => {    
    const store_id = ownProps.match.params.storeId;
    const categories = objectValuesArray(state.entities.categories);
    const errors = state.errors.product;
    const product = { 
        name: '',
        description: '', 
        price: '',
        category_Id: '', 
        store_id 
    };
    debugger

    return {
        product,
        categories,
        errors,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        action: (formData) => dispatch(createProduct(formData))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);