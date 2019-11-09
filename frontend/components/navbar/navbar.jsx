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
import { loading, setDarkMode } from "../utility";


class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.cartClick = this.cartClick.bind(this);
        this.giftClick = this.giftClick.bind(this);
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
    giftClick(e) {
        e.preventDefault();
        (!this.props || !this.props.loggedIn) ? 
            alert('Please log in or sign up') 
            : alert('Go to gift items');
        // this.props.history.push('/cartItems');
    }
    render() {
        let { loggedIn, currentUser, storeId, categories } = this.props;

        if (currentUser) {
            setDarkMode(currentUser.dark_mode);
        } else {
            setDarkMode(false);
        }

        const categoryList = () => {
            if (!categories.length) return null;
            return (<>
                {categories.slice(0, 6).map((category) => {
                    return (<div className="navbar-category" key={category.id}>
                        <Link to={`/categories/${category.id}`}>
                            {category.name}
                        </Link>
                    </div>)
                })}</>);
        };
        
        const loggedComponent = !loggedIn ? <LoggedOutNavbar/> : <LoggedInNavbar storeId={storeId} />;
        return (
            <div className="static-width navbar">
                <div className="navbar-top-container flex-wrap">
                    <li className="logo-nav">{Logo()}</li>
                    <SearchBarContainer />
                    <div className="navbar-top-left-container flex-row flex-wrap logged-nav-options-font">
                        {loggedComponent}

                        <div className={`cart-container ${loggedIn ? 'align-self-flex-end' : 'align-self-center'}`}>
                            <div className="cart-wrapper clickable" onClick={this.cartClick}>
                                <FontAwesomeIcon className="navbar-cart logged-nav-options-icon" icon="shopping-cart" size="xs" />
                                <p className="logged-nav-options-font">Cart</p>
                            </div>                            
                        </div>

                    </div>
                </div>
                <div className="navbar-bottom-container">
                    {categoryList()}
                    <div className="gift-container clickable" onClick={this.giftClick}>
                        <FontAwesomeIcon icon="gift"/>
                        <p className="navbar-category">Gifts</p>
                    </div>
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
        loggedIn: Boolean(currentUser),
        currentUser,
        storeId,
        categories
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        fetchCategories: () => dispatch(fetchCategories()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));