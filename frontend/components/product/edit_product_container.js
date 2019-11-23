import React from 'react';
import { connect } from 'react-redux';
import ProductForm from './product_form';
import { updateProduct, fetchProduct } from '../../actions/product_actions';
import { loading } from "../utility";
import { objectValuesArray } from "../../util/helpers_util";

const mapStateToProps = (state, ownProps) => {
    const productId = ownProps.match.params.productId;
    const product = state.entities.products[productId];
    const categories = objectValuesArray(state.entities.categories);
    const errors = state.errors.product;
    debugger
    return {
        product,
        categories,
        errors,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        action: (formData) => dispatch(updateProduct(formData)),
        fetchProduct: (id) => dispatch(fetchProduct(id))
    };
};


class EditProductForm extends React.Component {
    constructor(){
        super();
        this.state = {};
    }
    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.productId);
    }
    componentDidUpdate(prevProps){
        if (this.props.match.params.productId !== prevProps.match.params.productId){
            this.props.fetchProduct(this.props.match.params.productId);
        }
    }
    
    render(){
        const { product, action, categories, errors } = this.props;
        if (!product){
            return <div>{loading()}</div>
        };

        return (
            <ProductForm 
                action={action} 
                product={product} 
                categories={categories} 
                errors={errors}/>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProductForm);