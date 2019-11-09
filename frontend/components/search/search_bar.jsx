import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

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

            <div className="flexsearch">
                <div className="flexsearch--wrapper">
                    <form className="flexsearch--form" onSubmit={this.handleSubmit}>
                        {/* <div className="flexsearch--input-wrapper"> */}
                            <input className="flexsearch--input" type="search" placeholder="Search for items or shops"
                                onChange={this.update('query')} value={this.state.query} />
				        {/* </div> */}
                        <button id="search-btn" className='flexsearch--submit' type="submit">
                             <FontAwesomeIcon icon={faSearch} />
                        </button>
                        {/* <input class="flexsearch--submit" type="submit" value="&#10140;" /> */}
			        </form>
		        </div>
            </div>
            // <div class="flexsearch">
            //     <div class="flexsearch--wrapper">
            //         <form class="flexsearch--form" action="#" method="post">
            //             <div class="flexsearch--input-wrapper">
            //                 <input class="flexsearch--input" type="search" placeholder="search"/>
			// 	        </div>
            //             <input class="flexsearch--submit" type="submit" value="&#10140;" />
			//         </form>
		    //     </div>
            // </div>

            // <div className="search-container">
            //     <form className='search' onSubmit={this.handleSubmit}>
            //         {/* <div className='search-container'> */}
            //             <input className='search-input' type="text" onChange={this.update('query')} value={this.state.query}
            //                 placeholder='Search for items or shops' />
            //             <button className='search-button' type="submit">
            //                 <FontAwesomeIcon icon={faSearch} />
            //             </button>
            //         {/* </div> */}
            //     </form>
            // </div>

        )
    }
}

export default withRouter(SearchBar); 