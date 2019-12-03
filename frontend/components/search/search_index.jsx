import React from 'react';
import ProductsList from '../product/product_list';
import { loading } from "../utility";
import { isDataFetched } from "../../util/helpers_util";

class SearchIndex extends React.Component {
    constructor() {
        super();

        this.state = {
            isLoaded: false,
        };

        this.updateFetches = this.updateFetches.bind(this);
        this.toProductPage = this.toProductPage.bind(this);
    };

    updateFetches() {
        const promises = [];
        const query = this.props.query;
        if (!isDataFetched(this.props.searchResults) && query) promises.push(this.props.fetchSearchResults(query));
        if (!isDataFetched(this.props.stores)) promises.push(this.props.fetchStores());
        // if (!isDataFetched(this.props.products)) promises.push(this.props.fetchProducts());
        const that = this;
        Promise.all(promises)
            .then((result) => {
                that.setState({
                    isLoaded: true,
                });
            });
    }

    componentDidMount() {
        this.updateFetches();
    }

    toProductPage(product) {
        return (e) => {
            e.preventDefault();
            this.props.history.push(`/stores/${product.store_id}/products/${product.id}`)
        };
    }

    render(){
        debugger
        if (!this.state.isLoaded) {
            return <div>{loading()}</div>
        };
        let { searchResults, query, stores } = this.props;

        if (searchResults && searchResults.length === 0) {
            return <div>
                <h2>No results for "{query}"</h2>
            </div>
        };

        return (
            <div>
                <h2>"{query} ({searchResults.length} Results)"</h2>
                <ProductsList
                    products={searchResults}
                    stores={stores}
                    clickEvent={this.toProductPage} />
            </div>)
    };
}

export default SearchIndex;