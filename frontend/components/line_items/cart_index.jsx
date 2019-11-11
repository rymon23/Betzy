import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { loading } from "../utility";
import LineItemEdit from "./line_item_edit";

class CartIndex extends React.Component {
    constructor() {
        super();
    
        this.state = {
            error: null,
            isLoaded: false
        };

        this.isFetching = false;
        this.fetchers = this.fetchers.bind(this);
    }

    async fetchers(callBacks){
        return Promise.allSettled(
            [
                this.props.fetchLineItems(),
                this.props.fetchStores(),
                this.props.fetchProducts()

            ]).then((result) => {
                this.setState({
                    isLoaded: true,
                })
            }
            );
    }

    componentDidMount() {
        this.fetchers();
    }
    // componentDidUpdate(prevProps) {
    //     // if (this.props.match.params.storeId !== prevProps.match.params.storeId) {
    //         this.props.fetchLineItems();
    //         this.props.fetchStores();
    //         this.props.fetchProducts();
    //     // }
    // }

    render() {
        if (!this.state.isLoaded){
            return <div>{loading()}</div>
        }

        let { lineItems, stores, products } = this.props;

        if (lineItems &&  lineItems.length === 0 ){
            return <div>
                <h2>Your cart is empty</h2>
            </div>
        }

        const lineItemsListing = (lineItems, products, stores) => {
            const lineItemsList = lineItems.map((lineItem) => {
                const product = products[lineItem.product_id];
                const store = stores[product.store_id];
                return (
                    <li className="line-items-listing-li" key={product.id}>
                        <LineItemEdit
                            lineItem={lineItem}
                            product={product}
                            productStore={store}/>
                    </li>
                    )
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
                            <span>Keep shopping</span>
                        </div>
                        <div className="cart-content-container flex-row">

                            {lineItemsListing(lineItems, products, stores)}

                            <div className="cart-checkout-container flex-column">
                                <h4>How you'll pay</h4>
                                <div>
                                    <div className="checkout-input-container flex-row">
                                        <input type="radio" />
                                        <label>Vista</label>
                                    </div>
                                    <div className="checkout-input-container flex-row">
                                        <input type="radio" />
                                        <label>Paypal</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> );
    }
}

export default CartIndex;