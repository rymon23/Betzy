import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import Logo from "../logo/logo";
import SearchForm from "../search/search";
import { APP_NAME } from "../../util/config_util";

const LoggedOutNavbar = (props) => {
    return (
        <ul className="logged-out-navbar-ul">
            <li className="logo-nav">
                { Logo() }
            </li>

            <SearchForm />

            <li className="sell-on-epsy" onClick={() => alert('Please log in or sign up first!')}>
                Sell on {APP_NAME}
            </li>

            <li className="greeting-nav"><GreetingContainer/></li>

            <li className="cart-nav" onClick={() => alert('Please log in or sign up first!')}>
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                Cart
            </li>

        </ul>
    );
};

export default LoggedOutNavbar;