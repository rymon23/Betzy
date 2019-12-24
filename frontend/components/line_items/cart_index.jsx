import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { loading } from "../utility";
import LineItemEdit from "./line_item_edit";
import { isDataFetched } from "../../util/helpers_util";


function CartIndexHook(props) {
    const [isLoaded, setLoaded] = useState(false);

    // debugger

    useEffect(() => {
        updateFetches();
    });

};

class CartIndex extends React.Component {
    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            cartItems: [],
        };
        this.totalCost = 0;

        this.removeCartItem = this.removeCartItem.bind(this);
    }

    componentDidMount() {
        const promises = [];
        promises.push(this.props.fetchLineItems());
        if (!isDataFetched(this.props.stores)) promises.push(this.props.fetchStores());
        if (!isDataFetched(this.props.products)) promises.push(this.props.fetchProducts());
        const that = this;
        Promise.all(promises)
            .then((result) => {
                debugger
                that.setState({
                    isLoaded: true,
                    cartItems: this.props.lineItems,
                })
            });
    }

    removeCartItem(lineItemId, e) {
        // e.preventDefault();
        debugger
        const that = this;
        this.props.fetchLineItems().then((result) => {
            debugger
            that.setState({
                cartItems: this.props.lineItems,
            })
        });
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
            this.totalCost = 0.00;
            const that = this;
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
                debugger
                that.totalCost += parseFloat(product.price);

                return (
                    <li className="line-items-listing-li" key={lineItem.id}>
                        <LineItemEdit
                            lineItem={lineItem}
                            product={product}
                            productStore={store}
                            removeCartItem={this.removeCartItem}
                            />
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
                                <h4>How you'll pay</h4>
                                <div className="cart-checkout-pay-options-container">
                                    <span className="cart-checkout-payment-option">
                                        <input type="radio" name="payment" value="vista" />
                                        <img src="https://www.merchantequip.com/image/?logos=v|m|a|d&height=32" 
                                            alt="Merchant Equipment Store Credit Card Logos" />
                                    </span>
                                    <span className="cart-checkout-payment-option">
                                        <input type="radio" name="payment" value="paypal"/>
                                        <img src="https://www.merchantequip.com/image/?logos=p&height=32" 
                                            alt="Merchant Equipment Store Credit Card Logos" />                               
                                    </span>                                     
                                </div>
                                <div className="cart-total-container">
                                    <span>Item(s) total</span>
                                    <span>${this.totalCost.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> );
    }
}

export default CartIndex;