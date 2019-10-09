import React from 'react';

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

        debugger
        if (!category || products.length === 0 || Object.keys(stores).length === 0){
            return <div>Loading...</div>
        }
        const categoryProducts = products.map((product, ix) => {
            debugger
            if (product === undefined) return null;
            return (
                <li key={ix} onClick={this.ProductPage(product)} >
                    [image here]
                    <p>{product.name.slice(0, 35)}...</p>
                    {/* { <p className="category-shop-name">{stores[product.store_id].title}</p> } */}
                    { <p>USD {product.price}</p>}
                </li>
            )
        });
        return (
            <div className="products-listing" id="category-show">
                {/* <h2>{ category.name }</h2> */}
                <ul>
                    {categoryProducts}
                </ul>
            </div>
        )
    }
}

export default CategoryShow;