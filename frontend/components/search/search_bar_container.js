import SearchBar from './search_bar3';
import { connect } from 'react-redux';
import { fetchSearchResults } from '../../actions/search_actions';
import { fetchKeywords } from '../../actions/keyword_actions';
import { objectValuesArray } from "../../util/helpers_util";

const mapStateToProps = (state) => {
    const keywords = objectValuesArray(state.entities.keywords);
    debugger
    return {
        keywords,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSearchResults: (searchQuery) => dispatch(fetchSearchResults(searchQuery)),
        fetchKeywords: () => dispatch(fetchKeywords()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);