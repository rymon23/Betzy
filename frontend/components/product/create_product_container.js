import { connect } from "react-redux";
import ProductForm from "./product_form";
import { createProduct } from "../../actions/product_actions";

const mapStateToProps = (state, ownProps) => {    
    const storeId = ownProps.match.params.storeId;
    const product = { 
            title: '',
            description: '', 
            price: '',
            categoryId: '', 
            storeId: storeId 
        };
    const errors = state.errors.product;
    return {
        product,
        errors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        action: formData => dispatch(createProduct(formData))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);