import React from 'react';
import { connect } from 'react-redux';
import { selectAllSearchResults } from '../../reducers/selector_reducer';
import { fetchStores } from '../../actions/store_actions';
import ProductsList from '../product/product_list';
import { loading } from "../utility";

class SearchIndex extends React.Component {
    constructor() {
        super();
        this.ProductPage = this.ProductPage.bind(this);
    };

    // ProductPage(product) {
    //     event.preventDefault();
    //     return (event) => {
    //         event.preventDefault();
    //         this.props.history.push(`/shops/${product.shopId}/products/${product.id}`)
    //     }
    // };

    ProductPage(product) {
        return (e) => {
            e.preventDefault();
            this.props.history.push(`/stores/${product.store_id}/products/${product.id}`)
        };
    }

    render(){
        let { searchResults, query, stores } = this.props;
        if (!query || !searchResults) {
            return <div>{loading()}</div>
        }

        debugger

        const productsLi = searchResults.map(product => {
            return (
                <li key={product.id} onClick={this.ProductPage(product)} >
                    <img src={product.imageUrls[0]} />
                    <p>{product.name.slice(0, 30)}...</p>
                    {/* <p className="search-shop-name">{product.shopName}</p> */}
                    <p>USD {product.price}</p>
                </li>
            )
        });

        return (
            <div>
                <h2>"{query} ({searchResults.length} Results)"</h2>
                {/* <ul>
                    {productsLi}
                </ul> */}
                <ProductsList
                    products={searchResults}
                    stores={stores}
                    clickEvent={this.ProductPage} />
            </div>
        )
    };
}

const mapStateToProps = state => {
    debugger
    return {
        searchResults: selectAllSearchResults(state.entities.searchResults),
        stores: state.entities.stores
    }
};

export default connect(mapStateToProps, null)(SearchIndex);