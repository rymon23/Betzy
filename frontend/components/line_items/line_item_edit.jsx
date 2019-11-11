import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateLineItem, deleteLineItem } from '../../actions/line_item_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { imgProductCart, imgIcon, itemQuantity } from '../../components/utility'

class LineItemEdit extends React.Component {
    constructor(props) {
        super(props);

        debugger

        this.state = Object.assign({}, {
            quantity: 1,
        }, this.props.lineItem);

        this.update = this.update.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    update(field) {
        event.preventDefault();
        return event => {
            this.setState({ [field]: event.target.value })
            this.props.updateLineItem(this.state.quantity)
        };
    }
    handleUpdate(lineItem) {
        event.preventDefault();
        return (event) => {
            this.props.updateLineItem({
                id: lineItem.id,
                quantity: event.target.value,
            });
        }
    };
    handleRemove(lineItemId) {
        event.preventDefault();
        return (event) => {
            this.props.deleteLineItem(lineItemId);
        }
    };

    render() {
        let { lineItem, product, productStore} = this.props;
        const store = productStore;
        // if (!lineItem || !product || !store) {
        //     return <div>{loading()}</div>
        // }

        debugger

        return (
            <div className="line-item-container flex-column">
                <div className="line-item-header-container">
                    <Link to={`/stores/${product.store_id}`}>
                        <div className="line-item-store-link-container flex-row">
                            {imgIcon(store.imageUrl)}
                            <p>{store.name}</p>
                        </div>
                    </Link>
                </div>
                <div className="line-item-content-container flex-row">
                    { imgProductCart(product.imageUrls[0]) }

                    <div className="line-item-content">
                        <div className="line-item-content-middle flex-column">
                            <h5>{product.name}</h5>
                            <p>{product.description}</p>
                            <div className="line-item-remove-button-container">
                                <p onClick={this.handleRemove}>Remove</p>
                            </div>
                        </div>
                        {itemQuantity(lineItem.quantity)}
                        {/* <div className="line-item-quantity-container flex-row">
                            <span>{lineItem.quantity}</span>
                            <FontAwesomeIcon icon="caret-down" size="2x" />
                        </div> */}

                        <p className="line-item-price">${product.price}</p>                        
                    </div>

                </div>

            </div>
        );
    }
}

// const mapStateToProps = (state, ownProps) => {
//     const lineItems = ownProps.lineItem;

//     debugger

//     return { lineItems };
// };
const mapDispatchToProps = (dispatch) => {
    return {
        deleteLineItem: (lineItem) => dispatch(deleteLineItem(lineItem)),
        updateLineItem: (lineItemId) => dispatch(updateLineItem(lineItemId)),
    };
};

export default connect(null, mapDispatchToProps)(LineItemEdit);