import React from 'react';
import {connect} from 'react-redux';
import LoggedInNavbar from './logged_in_navbar';
import LoggedOutNavbar from './logged_out_navbar';
import {withRouter, Link} from 'react-router-dom'; 
import { fetchAllUsers } from '../../actions/user_actions';
import { fetchCategories } from '../../actions/category_actions';
import { getStoreId } from "../../util/helpers_util";
import Logo from "../logo/logo";
import SearchBarContainer from '../search/search_bar_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, } from '@fortawesome/free-solid-svg-icons'


class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.cartClick = this.cartClick.bind(this);
    }
    componentDidMount(){
        this.props.fetchAllUsers();
        this.props.fetchCategories();
    }

    cartClick(e) {
        e.preventDefault();
        (!this.props || !this.props.loggedIn) ? 
            alert('Please log in or sign up') 
            : alert('Go to cart items');
        // this.props.history.push('/cartItems');
    }
    render() {
        let { loggedIn, storeId, categories } = this.props;
        
        const categoryList = () => {
            if (!categories.length) return null;
            return ( <ul className="category-ul"> 
                { categories.slice(0,6).map((category) => 
                { return (<li key={category.id}>
                            <Link to={`/categories/${category.id}`}>
                                {category.name}
                            </Link>
                        </li>)})}</ul>)
        }
        
        const loggedComponent = !loggedIn ? <LoggedOutNavbar/> : <LoggedInNavbar storeId={storeId} />;
        return (
            <div className="static-width navbar">
                <div className="navbar-top-container">
                    <li className="logo-nav">{Logo()}</li>
                    <SearchBarContainer />
                    <div className="logged-bar-container">
                        {loggedComponent}
                        <div className="cart-container" onClick={this.cartClick}>
                            <FontAwesomeIcon className="navbar-cart" icon="shopping-cart" size="xs" />
                            <p>Cart</p>
                        </div>
                    </div>
                </div>
                <div className="navbar-bottom-container">
                    {categoryList()}
                    {/* <a href="#">Gifts</a> */}
                </div>
            </div>
        );
    }
} 
    
const mapStateToProps = (state) => {
    const currentUser = state.session.currentUser; 
    const storeId = getStoreId(currentUser);
    const categories = Object.values(state.entities.categories) || [];
    return {
        loggedIn: Boolean(state.session.currentUser),
        storeId,
        categories
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        fetchCategories: () => dispatch(fetchCategories()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));