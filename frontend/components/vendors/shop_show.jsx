import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class StoreShow extends React.Component {
    constructor() {
        super();
        this.handleEdit = this.handleEdit.bind(this);
        this.handleStock = this.handleStock.bind(this);
        this.toProductPage = this.toProductPage.bind(this);
    }

    componentDidMount() {
        this.props.fetchStore(this.props.match.params.storeId);
        this.props.fetchProducts();
        this.props.fetchCategories();
        this.props.fetchAllUsers();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.storeId !== prevProps.match.params.storeId) {
            this.props.fetchStore(this.props.match.params.storeId);
            this.props.fetchProducts();
            this.props.fetchCategories();
            this.props.fetchAllUsers();
        }
    }

    handleEdit(event){
        event.preventDefault();
        this.props.history.push(`/stores/${this.props.store.id}/edit`);  
    }

    handleStock(event){
        event.preventDefault();
        this.props.history.push(`/stores/${this.props.store.id}/products/new`);   
    }

    toProductPage(productId){
        return (event) => {
            event.preventDefault();
            this.props.history.push(`/stores/${this.props.store.id}/products/${productId}`)
        }
    }

    editDeleteButton(product){
        let { store, currentUserId, deleteProduct } = this.props;
        let editDeleteButton;
        if (currentUserId === store.owner_id) {
            editDeleteButton = (
                <div className="edit-delete-button">
                    <Link to={`/products/${product.id}/edit`} className="clicky">Edit item</Link>
                    <button onClick={() => deleteProduct(product.id)} className="clicky">Delete</button>
                </div>
            );
        }
        return editDeleteButton;
    }

    render() {
        
        let { store, currentUserId, products, categories ,users } = this.props;
        debugger
        if (!store || products.length === 0 || categories.length === 0 || users.length === 0) {
            return (
                <div>Loading...</div>
            )
        }

        let stockItemButton;
        if ( currentUserId === store.owner_id ){
            stockItemButton = (
                <div className="stock-edit-button">
                    <button className="clicky stock-your-shop-button" onClick={this.handleStock}>
                        Stock your store
                    </button>

                    <button className="clicky edit-your-shop-button" onClick={this.handleEdit}>
                        Edit your store
                    </button>
                </div>
                
            );
        } else {
            stockItemButton = '';
        }

        const productLi = products.map((product) => {
            debugger
                return (
                    <li key={product.id}>
                        <div onClick={this.toProductPage(product.id)}>
                            {/* <img src={product.imageUrls[0]} /> */}
                            <p className="product-name">{product.name.slice(0, 27)}...</p>
                            <p><strong>USD {product.price}</strong></p>
                        </div>

                        {this.editDeleteButton(product)}
                    </li>
                )
            
        });

        return (
            <div className="shop-show">
                <div className="shop-show-header">
                    <div className="shop-logo">
                        {/* <img src={store.imageUrl} />
                        {stockItemButton} */}
                    </div>

                    <div className="shop-info">
                        <div className="shop-name-show">
                            {store.title}
                        </div>
                    </div>

                    <div className="owner-info">
                        <p>Shop owner</p>
                        [image here]
                        <div className="shop-owner-name">{ users[store.owner_id].username }</div>
                        <div className="shop-owner-email">
                            <i className="fa fa-envelope-o" aria-hidden="true"></i>
                            { users[store.owner_id].email }
                        </div>
                    </div>
                    
                </div>

                <div className="products-listing">
                    <label>All items</label>
                    <ul>
                        {productLi}
                    </ul>
                </div>

            </div>
        );
    }
}

export default withRouter(StoreShow);