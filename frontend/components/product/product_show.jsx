import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class ProductShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product_id: this.props.match.params.productId,
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
        this.props.addToCart(this.state);
        this.props.history.push('/cartItems');
    }

    handleChange(e) {
        this.setState({ quantity: e });
    }

    render() {
        let { product, store, currentUserId } = this.props;
        if (!product || !store) {
            return <div></div>
        }

        const addToCartButton = currentUserId === product.ownerId
            ? ''
            : <button className="clicky" onClick={this.AddToCart}>Add to cart</button>;
        return (
            <div className="product-show">
                <div className="carousel">
                    {/* <Slider imageUrls={product.imageUrls} /> */}
                </div>

                <div className="product-info">
                    <ul>
                        <li>
                            <Link to={`/stores/${store.id}`}>{store.title}</Link>
                        </li>
                        <li>{product.name}</li>
                        <li className="price">
                            <strong>USD {product.price}</strong>
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
                            <span>Only
                                <strong>{product.quantity}</strong>
                                in stock!</span>
                        </li>
                        <li>
                            {addToCartButton}
                        </li>

                    </ul>
                    <div className="product-details">
                        <label htmlFor="details">Item details</label>
                        {product.description}
                    </div>
                    <div className="owner-info">
                        <p>Meet {store.owner.username}</p>
                        <img id="owner-info-image" src={store.profilePicUrl} />
                        <div className="shop-owner-name">{store.owner.username}</div>
                        <div className="shop-owner-email">
                            <i className="fa fa-envelope-o" aria-hidden="true"></i>
                            {store.owner.email}
                        </div>
                    </div>
                </div>
                <div>
                    [reviews]
                </div>

            </div>
        )
    };
}

export default withRouter(ProductShow);
