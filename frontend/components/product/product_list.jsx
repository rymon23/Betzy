import React from 'react';
import { limitStringDisplay } from "../../util/helpers_util";
import { loading } from "../utility";

class ProductsList extends React.Component {
    // constructor(){
    //     super();
    // }

    render() {
        let { products, stores = null, clickEvent } = this.props;

        const productsListing = (products, stores, clickEvent) => {
            if (Object.keys(products).length === 0 || (stores && Object.keys(stores).length === 0)) {
                return <div>{loading()}</div>
            }
            const productsList = products.map((product) => {
                if (product === undefined) return null;
                return (
                    <li className="products-listing-li" 
                        key={product.id} 
                        onClick={ clickEvent(product) }>

                        <img src={product.imageUrls[0]} />
                        <p>{limitStringDisplay(product.name, 60)}</p>
                        {
                            stores ? 
                            <p className="products-listing-store-name">{limitStringDisplay(stores[product.store_id].name, 60)}</p>
                            : 
                            null
                        }
                        <p><strong>${product.price}</strong></p>
                    </li>)
            });
            return <div className="products-listing">
                        <ul className="products-listing-ul">
                            {productsList}
                        </ul>
                    </div>;
        }
        return <div>
                { productsListing(products, stores, clickEvent) }
            </div>
    }
}

export default ProductsList;