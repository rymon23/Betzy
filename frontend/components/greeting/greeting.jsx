import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Greeting = ({currentUser, logout, enableModal}) => {
    const sessionLinks = () => (
        <div className="login-signup">
            <span className="register">
                <a href="#" onClick={() => enableModal('signup')} >
                    Register
                </a>
            </span>  
            <span className="login">
                <a href="#" onClick={() => enableModal('login')} >
                    Sign in
                </a>
            </span>
        </div>
    );

    const personalGreeting = () => (
        <div className="dropdown nav-icon-link-container clickable">
            <button className="dropdown-btn clickable">
                
                <div className="profile-pic-dropdown">
                    <img src={currentUser.imageUrl} />
                </div>
                {/* <FontAwesomeIcon 
                    className="profile-icon" 
                    icon="user" size="2x"/> */}
                <div className="flex-row align-items-center">
                    <p>You</p>
                    <FontAwesomeIcon icon="caret-down" />
                </div>
            </button>
            
            <div className="dropdown-menu">               
                <div className="dropdown-header">
                    <Link to={`/users/${currentUser.id}`}>
                        <span className="view-profile">
                            View profile
                            <i className="fa fa-caret-right" aria-hidden="true"></i>
                        </span>
                        <span className="fname">{currentUser.username}</span>
                        <div id="profile-pic">
                            <img src={currentUser.imageUrl}/>
                        </div>
                    </Link>
                    
                </div>
                <div className="dropdown-content">
                    <a href="#">Favorites</a>
                    <a href="#">Puchases and reviews</a>
                    <a href="#" onClick={logout} className="logout-btn">Log out</a>
                </div>
            </div>

        </div>
 
    );

    return (currentUser
        ? personalGreeting()
        : sessionLinks());
};

export default withRouter(Greeting);
