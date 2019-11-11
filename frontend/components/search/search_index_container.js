import { connect } from 'react-redux';
import SearchIndex from './search_index';
import { selectAllSearchResults } from '../../reducers/selector_reducer';
import { fetchStores } from '../../actions/store_actions';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        searchResults: selectAllSearchResults(state.entities.searchResults),
        stores: state.entities.stores,
        query: ownProps.match.params.searchQuery || ""

}};

export default connect(mapStateToProps, null)(SearchIndex);