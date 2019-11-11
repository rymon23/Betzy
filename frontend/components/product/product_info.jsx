import React from 'react';
import { withRouter } from 'react-router-dom';


class ProductInfo extends React.Component {
    constructor(props){
        super(props);

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
                <img src={product.imageUrls[0]} />
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
                            {addToCartButton}
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
                <div>
                    [reviews]
                    </div>

            </div>
        )
    }


}

export default withRouter(ProductInfo);