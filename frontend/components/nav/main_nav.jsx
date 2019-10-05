import React from 'react';
import { Link } from 'react-router-dom';
import CategoryForm from './category_form';
import SearchForm from "../search/search";
import { APP_NAME } from "../../util/config_util";
const SELL_BUTTON_TEXT = `Sell on ${APP_NAME}`;

class MainNav extends React.Component{
    constructor(props){
        super(props);
        this.navDisplay = this.navDisplay.bind(this);
        this.greetCurrentUser = this.greetCurrentUser.bind(this);
        this.userAuthOptions = this.userAuthOptions.bind(this);
    }

    navDisplay(){
        return (this.props.currentUser) ? this.greetCurrentUser() : this.userAuthOptions()
    }

    navOptionsDisplay() {
        return (
            <div className="main-nav-options">
                {(this.props.currentUser) ? this.greetCurrentUser() : this.userAuthOptions()}
                <ul className="cart-icon">
                    <li>[CART]</li>
                </ul>
            </div>
        );
    }

    greetCurrentUser(){
        return (
            <div className="current-user-nav">
                <ul>
                    <li><Link to='/'>{ SELL_BUTTON_TEXT }}</Link></li>
                    <li><Link to={`/users/${this.props.currentUser.id}`}>You</Link></li>
                   <li>
                        <button className="logout-button"
                            onClick={this.props.logout}>
                            Log out
                        </button>
                   </li>
                </ul>
            </div>
        );
    }

    userAuthOptions(){
        return (
            <nav className="user-auth-options">
                <ul>
                    <li>
                        <Link className="sell-link" 
                            to={"/"}>{ SELL_BUTTON_TEXT }
                        </Link></li>
                    <li>
                        <button onClick={() => this.props.enableModal('signup')} 
                            className="Register">Register</button></li>
                    <li>
                        <button onClick={() => this.props.enableModal('login')} 
                            className="login">Sign in</button></li>
                </ul>
            </nav> );
    }


    render(){
        return (
            <div className="main-nav-parent">
                <nav className="nav-bar">
                    <Link to="/" className="header-link logo">
                        {APP_NAME}
                    </Link>
                    <SearchForm />
                    <div>
                        {this.navOptionsDisplay()}
                    </div>
                </nav>
                <CategoryForm />
            </div>
        );
    }

}

export default MainNav;