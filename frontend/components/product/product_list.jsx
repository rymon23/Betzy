import React from 'react';
import { limitStringDisplay } from "../../util/helpers_util";
import { loading, imgProductShow } from "../utility";

class ProductsList extends React.Component {
    // constructor(){
    //     super();
    // }

    render() {
        let { products, stores = null, clickEvent, editDeleteButton = null } = this.props;

        const productsListing = (products, stores, clickEvent, editDeleteButton) => {
            if (Object.keys(products).length === 0 || (stores && Object.keys(stores).length === 0)) {
                return <div>{loading()}</div>
            }
            const productsList = products.map((product) => {
                if (product === undefined) return null;
                return (
                    <li className="products-listing-li flex-column" 
                        key={product.id} >
                        <div className="products-listing-content" 
                            onClick={ clickEvent(product) }>
                            {(product.imageUrls && product.imageUrls.length > 0) ?
                                <img src={product.imageUrls[0]} />
                                : <img src={window.pagePics.placeholders.default} />
                            }

                            {/* <img src={product.imageUrls[0]} /> */}
                            <p>{ limitStringDisplay(product.name, 60) }</p>
                            {
                                stores ? 
                                <p className="products-listing-store-name">{limitStringDisplay(stores[product.store_id].name, 60)}</p>
                                : 
                                null
                            }
                            <p><strong>${product.price}</strong></p>
                        </div>
                        { editDeleteButton? editDeleteButton(product) : null }
                    </li>)
            });
            return <div className="products-listing">
                        <ul className="products-listing-ul">
                            {productsList}
                        </ul>
                    </div>;
        }
        return <div>
            {productsListing(products, stores, clickEvent, editDeleteButton) }
            </div>
    }
}

export default ProductsList;