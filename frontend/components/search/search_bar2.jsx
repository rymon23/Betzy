import React from 'react'
import ReactDOM from 'react-dom'
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            autoCompleteResults: [],
            itemSelected: {},
            showItemSelected: false
        };
        // this.getAutoCompleteResults.bind(this);

        $.getJSON('#/search_results?q=' + this.state.term)
            .then(response => this.setState({ autoCompleteResults: response.items }))
    }

    getAutoCompleteResults(e) {
        debugger
        this.setState({
            term: e.target.value
        }, () => {
            $.getJSON('#/search_results?q=' + this.state.term)
                .then(response => this.setState({ autoCompleteResults: response.items }))
        });
    }

    render() {
        let autoCompleteList = this.state.autoCompleteResults.map((response, index) => {
            debugger
            return <div key={index}>
                <h2>{response.name}</h2>
                <p>{response.description}</p>
            </div>
        });

        return (
            <div className="flexsearch">
                <div className="flexsearch--wrapper">
                    <form className="flexsearch--form" onSubmit={this.handleSubmit}>
                        <input className="flexsearch--input"
                            ref={(input) => { this.searchBar = input }} 
                            value={this.state.term} 
                            onChange={ this.getAutoCompleteResults.bind(this) } 
                            type='text' 
                            placeholder='Search...'/>
                        <button id="search-btn" className='flexsearch--submit' type="submit">
                            <FontAwesomeIcon icon={faSearch} />
                            <div>
                                {autoCompleteList}
                            </div>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(SearchBar); 

// document.addEventListener('DOMContentLoaded', () => {
//     ReactDOM.render(
//         <Dashboard />,
//         document.body.appendChild(document.createElement('div')),
//     )
// });