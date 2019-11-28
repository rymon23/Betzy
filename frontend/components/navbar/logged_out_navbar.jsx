import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { APP_NAME } from "../../util/config_util";

const LoggedOutNavbar = (props) => {
    const alertText = 'Please log in or sign up'
    return (
        <div className="logged-bar-container align-items-center">
            <a href="#" className="sell-link" onClick={() => alert(alertText)}>Sell on {APP_NAME}</a>
            <GreetingContainer />
        </div>
    );
};

export default LoggedOutNavbar;