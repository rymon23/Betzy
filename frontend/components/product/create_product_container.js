import { connect } from "react-redux";
import ProductForm from "./product_form";
import { createProduct } from "../../actions/product_actions";

const mapStateToProps = (state, ownProps) => {    
    const shopId = ownProps.match.params.shopId;
    const product = { 
            title: '',
            description: '', 
            price: '',
            categoryId: '', 
            shopId: shopId 
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