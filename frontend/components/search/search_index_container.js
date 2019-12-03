import { connect } from 'react-redux';
import SearchIndex from './search_index';
import { selectAllSearchResults } from '../../reducers/selector_reducer';
import { fetchSearchResults } from '../../actions/search_actions';
import { fetchStores } from '../../actions/store_actions';

const mapStateToProps = (state, ownProps) => {
    const searchResults = selectAllSearchResults(state.entities.searchResults);
    const stores = state.entities.stores;
    const query = ownProps.match.params.searchQuery || "";
    return {
        searchResults,
        stores,
        query, 
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSearchResults: (query) => dispatch(fetchSearchResults(query)),
        fetchStores: () => dispatch(fetchStores()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchIndex);