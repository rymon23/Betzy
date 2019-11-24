import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { loading } from "../utility";
import LineItemEdit from "./line_item_edit";
import { isDataFetched } from "../../util/helpers_util";

class CartIndex extends React.Component {
    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            cartItems: [],
        };

        this.isFetching = false;

        this.fetchers = this.fetchers.bind(this);
        this.removeCartItem = this.removeCartItem.bind(this);
    }

    async fetchers(promises){
        debugger
        // const promises = [];
        // if (!isDataFetched(this.props.lineItem)) promises.push(new Promise((resolve, reject) => this.props.fetchLineItems()) );
        // if (!isDataFetched(this.props.stores)) promises.push(new Promise((resolve, reject) => this.props.fetchStores()) );
        // if (!isDataFetched(this.props.products)) promises.push(new Promise((resolve, reject) => this.props.fetchProducts()) );
        // debugger
        return Promise.allSettled(promises).then((result) => {
            debugger
            this.setState({
                isLoaded: true,
                cartItems: this.props.lineItems,
            })
        });

            // .then((result) => {
            //     this.setState({
            //         isLoaded: true,
            //         cartItems: this.props.lineItems,
            //     });         
            // });

        // debugger
        // const that = this;
        // return new Promise(function (resolve, reject) {
        //     debugger
        //     if (!isDataFetched(that.props.lineItem)) that.props.fetchLineItems();
        //     if (!isDataFetched(that.props.stores)) that.props.fetchStores();
        //     if (!isDataFetched(that.props.products)) that.props.fetchProducts();
        // });

        // return Promise.allSettled(
        //     [
        //         this.props.fetchLineItems(),
        //         this.props.fetchStores(),
        //         this.props.fetchProducts({ carted: true, user_id: this.props.currentUser.id })
        //     ])
            // .then((result) => {
            //     this.setState({
            //         isLoaded: true,
            //         cartItems: this.props.lineItems,
            //     });         
            // });
    }

    componentDidMount() {
        debugger
        const promises = [];
        // if (!isDataFetched(this.props.lineItem)) promises.push(this.props.fetchLineItems());
        promises.push(this.props.fetchLineItems());
        if (!isDataFetched(this.props.stores)) promises.push(this.props.fetchStores());
        if (!isDataFetched(this.props.products)) promises.push(this.props.fetchProducts());
        debugger
        const that = this;
        Promise.allSettled(promises).then((result) => {
            debugger
            that.setState({
                isLoaded: true,
                cartItems: this.props.lineItems,
            })
        });
    }

    // componentDidUpdate(prevProps) {
    //     // if (this.props.match.params.storeId !== prevProps.match.params.storeId) {
    //         this.props.fetchLineItems();
    //         this.props.fetchStores();
    //         this.props.fetchProducts();
    //     // }
    // }

    removeCartItem(lineItemId, e) {
        // e.preventDefault();
        debugger
        const that = this;
        this.props.fetchLineItems().then((result) => {
            debugger
            that.setState({
                // isLoaded: true,
                cartItems: this.props.lineItems,
            })
        });
        // this.setState({
        //     cartItems: this.props.lineItems.filter(lineItem => lineItem.id != lineItemId) 
        // });
    };

    render() {
        if (!this.state.isLoaded){
            return <div>{loading()}</div>
        }
        // let { lineItems, stores, products } = this.props;
        let { stores, products } = this.props;
        let lineItems = this.state.cartItems;

        if (lineItems &&  lineItems.length === 0 ){
            return <div>
                    <h2>Your cart is empty</h2>
                </div>
        }
        debugger

        const lineItemsListing = (lineItems, products, stores) => {
            const lineItemsList = lineItems.sort((a, b) => {
                if (a.id < b.id) {
                    return 1;
                } else if (a.id > b.id) {
                    return -1;
                } else {
                    return 0;
                };
            }).map((lineItem) => {
                const product = products[lineItem.product_id];
                const store = stores[product.store_id];
                return (
                    <li className="line-items-listing-li" key={lineItem.id}>
                        <LineItemEdit
                            lineItem={lineItem}
                            product={product}
                            productStore={store}
                            removeCartItem={this.removeCartItem}/>
                    </li>)
            });

            return <div className="line-items-listing-container">
                <ul className="line-items-listing-ul">
                    {lineItemsList}
                </ul>
            </div>;        
        }

        return (
                <div className="cart-index-container">
                    <div className="cart-index" >
                        <div className="cart-header-container flex-row">
                            <h2>{lineItems.length === 1 ? '1 item' : `${lineItems.length} items` } in your cart</h2>
                            <span>
                                <Link to="/" 
                                    className='cart-keep-shopping hover-underline'>
                                    Keep shopping
                                </Link>    
                            </span>
                        </div>
                        <div className="cart-content-container flex-row">
                            {lineItemsListing(lineItems, products, stores)}

                            <div className="cart-checkout-container flex-column">
                                {/* <h4>How you'll pay</h4>
                                <div>
                                    <div className="checkout-input-container flex-row">
                                        <input type="radio" />
                                        <label>Vista</label>
                                    </div>
                                    <div className="checkout-input-container flex-row">
                                        <input type="radio" />
                                        <label>Paypal</label>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div> );
    }
}

export default CartIndex;