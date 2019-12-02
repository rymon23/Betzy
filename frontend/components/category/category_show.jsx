import React from 'react';
import { Link } from 'react-router-dom';
import { categoryHasProducts } from "../../util/helpers_util";
import { loading, noItemsFound } from "../utility";
import ProductsList from '../product/product_list';
import { isDataFetched } from "../../util/helpers_util";

class CategoryShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
        };

        this.updateFetches = this.updateFetches.bind(this);
        this.toProductPage = this.toProductPage.bind(this);
    }

    updateFetches() {
        const promises = [];
        if (!isDataFetched(this.props.category)) promises.push(this.props.fetchCategory(this.props.match.params.categoryId));
        if (!isDataFetched(this.props.products)) promises.push(this.props.fetchProducts());
        if (!isDataFetched(this.props.stores)) promises.push(this.props.fetchStores());
        const that = this;
        Promise.all(promises)
            .then((result) => {
                that.setState({
                    isLoaded: true,
                });
            });        
    }

    componentDidMount(){
        this.updateFetches();

        // this.props.fetchCategory(this.props.match.params.categoryId);
        // this.props.fetchStores();
        // this.props.fetchProducts();
    }
    componentDidUpdate(prevProps){
        if (this.props.match.params.categoryId !== prevProps.match.params.categoryId){
            this.updateFetches();

            // this.props.fetchCategory(this.props.match.params.categoryId);
            // this.props.fetchStores();
            // this.props.fetchProducts();
        }
    }

    toProductPage(product) {
        event.preventDefault();
        return (event) => {
            event.preventDefault();
            this.props.history.push(`/stores/${product.store_id}/products/${product.id}`)
        }
    }

    render(){
        let {category, stores, products} = this.props;

        debugger
        if (!category || !this.state.isLoaded || Object.keys(products).length  === 0 || Object.keys(stores).length === 0 ){
            return <section>{ loading() }</section>
        }

        if (category && categoryHasProducts(category)){
            return <div className="products-listing" id="category-show">
                    <h2>{category.name}</h2>
                    <ul>{ noItemsFound() }</ul>
                    </div>  
        }
    
        return (
            <div className="products-listing" id="category-show">
                <h2>{ category.name }</h2>
                <ProductsList
                    products={products}
                    stores={stores}
                    clickEvent={this.toProductPage} />
            </div>
        )
    }
}

export default CategoryShow;