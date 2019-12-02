import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { searchAutoComplete } from '../../reducers/selector_reducer'
import { isDataFetched } from "../../util/helpers_util";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        debugger
        this.state = { 
            searchQuery: '',
            keywordsFetched: isDataFetched(this.props.keywords),
         };

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentDidMount() {
        const promises = [];
        if (!isDataFetched(this.props.keywords)) promises.push(this.props.fetchKeywords());
        debugger
        const that = this;
        Promise.all(promises)
            .then((result) => {
                debugger
                that.setState({
                    keywordsFetched: isDataFetched(this.props.keywords),
                });
            });        
    }

    update(event) {
        event.preventDefault();
        const searchQuery = event.target.value;
        this.setState({ searchQuery });
        // if (this.state.keywordsFetched){

        // }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.fetchSearchResults(this.state.searchQuery);
        this.props.history.push(`/search/${this.state.searchQuery}`);
        this.setState({ searchQuery: '' });
    }

    render() {

        const autoCompleteList = (query, allProducts, allStores) => {
            const arr = searchAutoComplete(query, allProducts, allStores);
            if (arr.length === 0) return;

            let autolist = arr.map((response, index) => {
                debugger
                return <div key={index}>
                    <h3>{ response }</h3>
                    {/* <p>{response.description}</p> */}
                </div>
            });
        }

        return (
            <div className="flexsearch">
                <div className="flexsearch--wrapper">
                    <form className="flexsearch--form" onSubmit={this.handleSubmit}>
                        <input className="flexsearch--input" type="search" placeholder="Search for items"
                            onChange={this.update} value={this.state.searchQuery} />
                        <button id="search-btn" className='flexsearch--submit' type="submit">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </form>
                </div>

                {/* <div>
                    {autoCompleteList()}
                </div> */}
            </div>
        )
    }
}

export default withRouter(SearchBar); 

// class SearchProductsForm extends React.Component {

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit} className="search-products-form">
//                 <input type="text"
//                     onChange={this.update}
//                     placeholder="Search"
//                     value={this.state.searchQuery} />
//                 <button><i className="fa fa-search" aria-hidden="true"></i></button>
//             </form>
//         )
//     }
// };
