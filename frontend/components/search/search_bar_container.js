import SearchBar from './search_bar3';
import { connect } from 'react-redux';
import { fetchSearchResults } from '../../actions/search_actions';
import { fetchStores } from '../../actions/store_actions';

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSearchResults: (searchQuery) => dispatch(fetchSearchResults(searchQuery)),
    }
}

export default connect(null, mapDispatchToProps)(SearchBar);