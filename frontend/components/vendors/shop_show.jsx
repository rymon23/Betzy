import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { loading } from "../utility";
import ProductsList from '../product/product_list';

class StoreShow extends React.Component {
    constructor() {
        super();

        this.handleEdit = this.handleEdit.bind(this);
        this.handleStock = this.handleStock.bind(this);
        this.ProductPage = this.ProductPage.bind(this);
        this.toUserProfile = this.toUserProfile.bind(this);
        this.editDeleteButton = this.editDeleteButton.bind(this);
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
    handleEdit(e){
        e.preventDefault();
        this.props.history.push(`/stores/${this.props.store.id}/edit`);  
    }
    handleStock(e){
        e.preventDefault();
        this.props.history.push(`/stores/${this.props.store.id}/products/new`);   
    }

    ProductPage(product) {
        return (e) => {
            e.preventDefault();
            this.props.history.push(`/stores/${product.store_id}/products/${product.id}`)
        }
    }

    toUserProfile(userId) {
        return (e) => {
            e.preventDefault();
            this.props.history.push(`/users/${userId}`);
        }
    }
    
    editDeleteButton(product){
        debugger
        let { store, currentUserId, deleteProduct } = this.props;
        let editDeleteButton;
        if (currentUserId === store.owner_id) {
            editDeleteButton = (
                <div className="edit-delete-button default-font-color">
                    <Link to={`/products/${product.id}/edit`} className="clicky">Edit item</Link>
                    <button onClick={() => deleteProduct(product.id)} className="clicky">Delete</button>
                </div>
            );
        }
        return editDeleteButton;
    }

    render() {
        let { store, currentUserId, products, categories ,users } = this.props;
        
        if (!store || products.length === 0 || categories.length === 0 || Object.keys(users).length === 0) {
            return <div>{loading()}</div>
        }
        debugger

        let stockItemButton;
        if ( currentUserId === store.owner_id ){
            stockItemButton = (
                <div className="stock-edit-button flex-row">
                    <button className="clicky stock-your-shop-button" onClick={this.handleStock}>
                        Stock your store
                    </button>
                    <button className="clicky edit-your-shop-button" onClick={this.handleEdit}>
                        Edit your store
                    </button>
                </div>);
        } else {
            stockItemButton = '';
        }

        return (
            <div className="shop-show">
                <div className="shop-show-header">
                    <div className="shop-logo">
                        <img src={store.imageUrl} />
                        {/* { stockItemButton } */}
                    </div>

                    <div className="shop-info">
                        <div className="shop-name-show">
                            {store.name}
                        </div>
                        <div className="flex-row">
                            <p>0 Sales</p>
                        </div>
                        {stockItemButton}
                    </div>

                    <div className="owner-info clickable" 
                        onClick={this.toUserProfile(store.owner_id)} >
                        <p>Shop owner</p>
                        <img src={store.ownerImgUrl} id="owner-info-image" />
                        <div className="shop-owner-name">{ users[store.owner_id].username }</div>
                        <div className="shop-owner-email">
                            {/* <i className="fa fa-envelope-o" aria-hidden="true"></i> */}
                            { users[store.owner_id].email }
                        </div>
                    </div>
                </div>

                <div>
                    <h3>All items {products ? `(${products.length})`: null} </h3>
                    <ProductsList
                        products={products}
                        clickEvent={this.ProductPage}
                        editDeleteButton={this.editDeleteButton} />
                </div>

            </div>
        );
    }
}

export default withRouter(StoreShow);