import React from 'react';
import { Link } from 'react-router-dom';
import { categoryHasProducts } from "../../util/helpers_util";
import { loading, noItemsFound } from "../utility";
import ProductsList from '../product/product_list';

class CategoryShow extends React.Component {
    constructor(props) {
        super(props);
        this.ProductPage = this.ProductPage.bind(this);
    }
    componentDidMount(){
        this.props.fetchCategory(this.props.match.params.categoryId);
        this.props.fetchStores();
        this.props.fetchProducts();
    }
    componentDidUpdate(prevProps){
        if (this.props.match.params.categoryId !== prevProps.match.params.categoryId){
            this.props.fetchCategory(this.props.match.params.categoryId);
            this.props.fetchStores();
            this.props.fetchProducts();
        }
    }
    ProductPage(product) {
        event.preventDefault();
        return (event) => {
            event.preventDefault();
            this.props.history.push(`/stores/${product.store_id}/products/${product.id}`)
        }
    }
    render(){
        let {category, stores, products} = this.props;

        if (category && categoryHasProducts(category)){
            return <div className="products-listing" id="category-show">
                    <h2>{category.name}</h2>
                    <ul>{ noItemsFound() }</ul>
                    </div>  
        }
        
        if (!category || Object.keys(products).length  === 0 || Object.keys(stores).length === 0 ){
            return <section>{ loading() }</section>
        }

        return (
            <div className="products-listing" id="category-show">
                <h2>{ category.name }</h2>
                <ProductsList
                    products={products}
                    stores={stores}
                    clickEvent={this.ProductPage} />
            </div>
        )
    }
}

export default CategoryShow;