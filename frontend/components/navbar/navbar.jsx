import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LoggedInNavbar from './logged_in_navbar';
import LoggedOutNavbar from './logged_out_navbar';
import SearchBarContainer from '../search/search_bar_container';
import Logo from "../logo/logo";
import { fetchAllUsers } from '../../actions/user_actions';
import { fetchCategories } from '../../actions/category_actions';
import { fetchLineItems } from '../../actions/line_item_actions';
import { objectValuesArray, getStoreId, isDataFetched } from "../../util/helpers_util";
import { loading, setDarkMode } from "../utility";


class Navbar extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isLoaded: false,
            cartItems: [],
            isLoggedIn: this.props.loggedIn,
        };

        this.cartClick = this.cartClick.bind(this);
        this.giftClick = this.giftClick.bind(this);
    }

    componentDidMount(){
        // this.props.fetchAllUsers();
        // this.props.fetchCategories();
        // if (this.props.loggedIn){
        //     this.props.fetchLineItems();
        // }

        const promises = [];
        if (!isDataFetched(this.props.categories)) promises.push(this.props.fetchCategories());
        if (!isDataFetched(this.props.users)) promises.push(this.props.fetchAllUsers());
        if (this.props.loggedIn) {
            promises.push(this.props.fetchLineItems());
        };
        const that = this;
        Promise.all(promises)
        .then((result) => {
            that.setState({
                isLoaded: true,
                cartItems: this.props.lineItems,
            });
        });
    }

    componentDidUpdate(){
        if (!this.state.isLoggedIn && this.props.loggedIn) {
            const that = this;
            this.props.fetchLineItems().then(() => {
                that.state.isLoggedIn = that.props.loggedIn;
            });
        };
    }

    cartClick(e) {
        e.preventDefault();
        if (!this.props || !this.props.loggedIn || !this.props.currentUser) {
            alert('Please log in or sign up');
        } else {
            const cartLink = `/users/${this.props.currentUser.id}/line_items`;
            this.props.history.push(cartLink);
        };
    }

    giftClick(e) {
        e.preventDefault();
        (!this.props || !this.props.loggedIn) ? 
            alert('Please log in or sign up') 
            : alert('The Gifts page is currently under construction');
    }


    render() {
        if (!this.state.isLoaded) {
            return <div>{ loading(true) }</div>
        }

        let { loggedIn, currentUser, storeId, categories , lineItems } = this.props;

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
        const cartItemsCounter = (loggedIn, lineItems) => {
            if (loggedIn && lineItems && lineItems.length > 0) {
                debugger
                return (<div id="cart-nav-counter-display">
                            <div className="cart-nav-counter-container">
                                <span id="cart-nav-counter">{lineItems.length}</span>
                            </div>
                        </div>)      
            }
        }
        const loggedComponent = !loggedIn ? 
                                <LoggedOutNavbar /> 
                                : <LoggedInNavbar storeId={storeId} currentUser={currentUser} />;

        return (
            <div className="static-width navbar">
                <div className="navbar-top-container flex-wrap">
                    <li className="logo-nav">{ Logo() }</li>
                    <SearchBarContainer />
                    <div className="navbar-top-left-container flex-row flex-wrap logged-nav-options-font">
                        { loggedComponent }

                        <div className={`cart-container ${loggedIn ? 'align-self-flex-end' : 'align-self-center'}`}>
                            <div className="cart-wrapper clickable" onClick={this.cartClick}>
                                <FontAwesomeIcon className="navbar-cart logged-nav-options-icon" icon="shopping-cart" size="xs" />
                                <p className="logged-nav-options-font">Cart</p>
                            </div>
                            { cartItemsCounter(loggedIn ,lineItems) }
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
    const categories = objectValuesArray(state.entities.categories);
    const lineItems = objectValuesArray(state.entities.lineItems);
    const users = state.entities.users;
    return {
        loggedIn: Boolean(currentUser),
        currentUser,
        storeId,
        categories,
        lineItems,
        users,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        fetchCategories: () => dispatch(fetchCategories()),
        fetchLineItems: () => dispatch(fetchLineItems()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));