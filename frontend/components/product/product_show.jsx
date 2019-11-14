import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { loading } from "../utility";
import { imgProductShow, imgIcon, itemQuantity } from '../../components/utility'

class ProductShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product_id: this.props.match.params.productId,
            productLineItemQuantity: 1,
        };
        this.handleEdit = this.handleEdit.bind(this);
        this.AddToCart = this.AddToCart.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId);
        this.props.fetchStore(this.props.match.params.storeId);
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.productId !== prevProps.match.params.productId) {
            this.props.fetchProduct(this.props.match.params.productId);
            this.props.fetchStore(this.props.match.params.storeId);
        }
    }

    handleEdit(e) {
        e.preventDefault();
        this.props.history.push(`/products/${this.props.product.id}/edit`);
    }

    AddToCart(e) {
        e.preventDefault();
        debugger
        if (!this.props || !this.props.currentUserId) {
            alert('Please log in or sign up');
        } else {

            const lineItem = {
                quantity: 1,
                product_id: this.state.product_id,
                user_id: this.props.currentUserId
            };
            // const formData = new FormData();
            // formData.append('lineItem[quantity]', this.state.productLineItemQuantity);
            // formData.append('lineItem[product_id]', this.state.product_id);
            // formData.append('lineItem[user_id]', this.props.currentUserId);
            this.props.createLineItem(lineItem);
            this.props.history.push(`/users/${this.props.currentUserId}/line_items`);
        };
    }

    handleChange(e) {
        this.setState({ quantity: e });
    }

    render() {
        let { product, store, currentUserId } = this.props;
        if (!product || !store) {
            return <div>{loading()}</div>
        }

        const addToCartButton = (currentUserId === product.ownerId)
            ? ''
            : <button className="clicky" onClick={this.AddToCart}>Add to cart</button>;

        return (
            <div className="product-show">
                {/* <div className="carousel"> */}
                {/* <div className="product-image-container"> */}
                { imgProductShow(product.imageUrls[0]) }
                    {/* <img src={product.imageUrls[0]} /> */}
                {/* </div> */}
                <div className="product-info">
                    <ul>
                        <li>
                            <Link to={`/stores/${store.id}`}>{store.name}</Link>
                        </li>
                        <li>{product.name}</li>
                        <li className="price">
                            <strong>${product.price}</strong>
                        </li>
                        <li>
                            <label className="quantity" htmlFor="quantity">Quantity</label>
                            <br />
                            {/* <NumericInput
                                required
                                value={this.state.quantity}
                                id="quantity"
                                min={1}
                                max={product.quantity}
                                onChange={this.handleChange} /> */}
                            {/* <span>Only
                                in stock!</span> */}
                        </li>
                        <li>
                            { addToCartButton }
                        </li>

                    </ul>
                    <div className="product-details">
                        <label htmlFor="details">Item details</label>
                        {product.description}
                    </div>
                    <div className="owner-info">
                        <p>Meet {store.ownerName}</p>
                        <img id="owner-info-image" src={store.ownerImgUrl} />
                        <div className="shop-owner-name">{store.ownerName}</div>
                        <div className="shop-owner-email">
                            <i className="fa fa-envelope-o" aria-hidden="true"></i>
                            {store.ownerEmail}
                        </div>
                    </div>
                </div>
                {/* <div>
                    [reviews]
                </div> */}

            </div>
        )
    }
}

export default withRouter(ProductShow);
