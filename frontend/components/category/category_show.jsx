import React from 'react';
import { categoryHasProducts } from "../../util/helpers_util";
import { loading, noItemsFound } from "../utility";
import { Link } from 'react-router-dom';

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
            return <div>{ loading() }</div>
        }
        const categoryProducts = products.map((product) => {
            if (product === undefined) return null;
            return (
                <li key={product.id} onClick={this.ProductPage(product)} >
                    <img src={product.imageUrls[0]} />
                    <p>{product.name.slice(0, 35)}...</p>
                    {/* <p className="category-shop-name">
                        <Link to={`/stores/${product.store_id}`}>
                            {stores[product.store_id].title}</Link>
                    </p> */}

                    { <p className="category-shop-name">{stores[product.store_id].title}</p> }
                    { <p>USD {product.price}</p> }
                </li>
            )
        });
        return (
            <div className="products-listing" id="category-show">
                <h2>{ category.name }</h2>
                <ul>
                    {categoryProducts}
                </ul>
            </div>
        )
    }
}

export default CategoryShow;