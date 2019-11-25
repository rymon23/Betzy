import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { loading } from "../utility";
import { imgProductShow, itemQuantity } from '../../components/utility'

class ProductShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product_id: this.props.match.params.productId,
            productLineItemQuantity: 1,
        };
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.AddToCart = this.AddToCart.bind(this);
        this.toUserProfile = this.toUserProfile.bind(this);
    }
    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId);
        this.props.fetchStore(this.props.match.params.storeId);
        // if (this.props.currentUserId){
        //     this.props.fetchLineItem(this.props.currentUserId, this.props.match.params.productId);
        // }
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.productId !== prevProps.match.params.productId) {
            this.props.fetchProduct(this.props.match.params.productId);
            this.props.fetchStore(this.props.match.params.storeId);
            // if (this.props.currentUserId) {
            //     this.props.fetchLineItem(this.props.currentUserId, this.props.match.params.productId);
            // }
        }
    }

    toUserProfile(userId) {
        debugger
        return (e) => {
            e.preventDefault();
            this.props.history.push(`/users/${userId}`);
        }
    }

    handleEdit(e) {
        e.preventDefault();
        this.props.history.push(`/products/${this.props.product.id}/edit`);
    }

    handleChange(e) {
        debugger
        // return (e) => {
        //     e.preventDefault();
        //     this.setState({ productLineItemQuantity: e });
        //     // this.setState({ quantity: e });
        // }
        e.preventDefault();
        this.setState({
            productLineItemQuantity: e.target.value
        });
    }


    AddToCart(e) {
        e.preventDefault();
        debugger
        if (!this.props || !this.props.currentUserId) {
            alert('Please log in or sign up');
        } else {
            if (!this.props.lineItem) {
                const lineItem = {
                    quantity: this.state.productLineItemQuantity,
                    product_id: this.state.product_id,
                    user_id: this.props.currentUserId
                };
                const that = this;
                this.props.createLineItem(lineItem).then((result)=>{
                    debugger
                    that.props.history.push(`/users/${that.props.currentUserId}/line_items`);
                });
            }else{
                alert('You already have this item in your cart!');
            }
        };
    }

    render() {
        let { product, store, currentUserId, lineItem } = this.props;
        if (!product || !store) {
            return <div>{loading()}</div>
        }

        const quantityOptions = (product, lineItem) => {
            if (product.quantity <= 0){
                return <div>
                       This product is currently sold out
                    </div>;
            }else {
                const options = [];
                let preSelected = null;
                if (lineItem && lineItem.quantity > 0){
                    preSelected = lineItem.quantity;
                }
                for (let i = 1; i < product.quantity; i++) {
                    preSelected === i ? 
                        options.push(<option key={i} value={i} selected>{i}</option>)
                        : options.push(<option key={i} value={i}>{i}</option>)
                }    
                return <div className="quantity-options-container">
                            <select className="quantity-options-selector"
                                onChange={this.handleChange}>
                                { options }
                            </select>
                        </div>;   
            };
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
                        <li className="product-show-name">{product.name}</li>
                        <li className="product-show-price">
                            <strong>${product.price}</strong>
                        </li>
                        <li>
                            <label className="product-info-name" htmlFor="quantity">Quantity</label>
                            {/* { quantityOptions(product) } */}
                            { itemQuantity(product, lineItem, this.handleChange)}
                        </li>
                        <li>
                            { addToCartButton }
                        </li>
                    </ul>
                    <div className="product-details">
                        <label htmlFor="details">Item details</label>
                        {product.description}
                    </div>
                    <div className="product-show-owner-info">
                        <div className="product-show-owner-info-wrapper clickable" 
                            onClick={this.toUserProfile(store.owner_id)}>
                            <p>Meet {store.ownerName}</p>
                            <img id="owner-info-image" src={store.ownerImgUrl} />
                            <div className="shop-owner-name">{store.ownerName}</div>
                            <div className="shop-owner-email">
                                {/* <i className="fa fa-envelope-o" aria-hidden="true"></i> */}
                                {store.ownerEmail}
                            </div>
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
