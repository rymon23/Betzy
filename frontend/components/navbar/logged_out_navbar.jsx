import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { APP_NAME } from "../../util/config_util";

const LoggedOutNavbar = (props) => {
    const alertText = 'Please log in or sign up'
    return (
        // <div className="logged-out-navbar-ul">
        <div className="logged-bar-container">
            <a href="#" className="sell-link" onClick={() => alert(alertText)}>Sell on {APP_NAME}</a>
            <GreetingContainer/>
        </div>
        // <ul className="logged-out-navbar-ul">
        //     <li className="sell-on-betzy" 
        //         onClick={() => alert('Please log in or sign up')}>
        //         Sell on {APP_NAME}
        //     </li>
        //     <li className="greeting-nav"><GreetingContainer/></li>
        // </ul>
    );
};

export default LoggedOutNavbar;