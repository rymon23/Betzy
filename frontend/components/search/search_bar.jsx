import React from 'react';
import { withRouter } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = { query: ''}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
    }
    handleSubmit(e){
        e.preventDefault();
        e.stopPropagation();
        // this.setState({query: ''})
        // this.props.searchProducts(this.state.query).then(()=>{
        //     this.props.history.push('/search')
        // })
    }
    update(field){
        return(e) => {
            this.setState({[field]: e.target.value});
        }
    }
    render(){
        return(
            <form className='search' onSubmit={this.handleSubmit}>
                <div className='search-container'>
                    <input className='search-input' type="text" onChange={this.update('query')} value={this.state.query}
                        placeholder='Search for items or shops' />
                        
                    <button className='search-button' type="submit">
                        {/* <FontAwesomeIcon icon={faSearch} /> */}
                    </button>
                </div>
            </form>
        )
    }
}

export default withRouter(SearchBar); 