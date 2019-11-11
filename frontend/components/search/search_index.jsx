import React from 'react';

import { connect } from 'react-redux';
import { selectAllSearchResults } from '../../reducers/selector_reducer';
import { fetchStores } from '../../actions/store_actions';

class SearchIndex extends React.Component {
    constructor() {
        super();
        this.toProductPage = this.toProductPage.bind(this);
    };

    toProductPage(product) {
        event.preventDefault();
        return (event) => {
            event.preventDefault();
            // this.props.history.push(`/shops/${product.shopId}/products/${product.id}`)
        }
    };

    render(){
        let { searchResults, query, stores } = this.props;
        if (!query || !searchResults) {
            return <div>{loading()}</div>
        }

        debugger

        const productsLi = searchResults.map(product => {
            return (
                <li key={product.id} onClick={this.toProductPage(product)} >
                    <img src={product.imageUrls[0]} />
                    <p>{product.name.slice(0, 30)}...</p>
                    {/* <p className="search-shop-name">{product.shopName}</p> */}
                    <p>USD {product.price}</p>
                </li>
            )
        });

        return (
            <div className="products-listing ">
                <h2>"{query} ({searchResults.length} Results)"</h2>
                <ul>
                    {productsLi}
                </ul>
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

// export default SearchProducts;