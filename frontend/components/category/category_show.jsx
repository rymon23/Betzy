import React from 'react';

class CategoryShow extends React.Component {
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

    toProductPage(product) {
        event.preventDefault();
        return (event) => {
            event.preventDefault();
            this.props.history.push(`/stores/${product.storeId}/products/${product.id}`)
        }
    }

    render(){
        let {category, stores, products} = this.props;
        if (!category || Object.keys(stores).length === 0 || !products){
            return <div></div>
        }

        const categoryItems = products.map(product => {
            return (
                <li key={product.id} onClick={this.toProductPage(product)} >
                    [image here]
                    <p>{product.title.slice(0, 35)}...</p>
                    <p className="category-shop-name">{stores[product.storeId].name}</p>
                    <p>USD {product.price}</p>
                </li>
            )
        });
        return (
            <div className="products-listing" id="category-show">
                <ul>
                    {categoryItems}
                </ul>
            </div>
        )
    }

}



export default CategoryShow;