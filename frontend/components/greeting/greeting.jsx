import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Greeting = ({ currentUser, logout, enableModal }) => {
    debugger
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
        <div className="dropdown-trigger user-nav-dropdown dropdown nav-icon-link-container clickable">
            <button className="dropdown-btn clickable">

                <div className="profile-pic-dropdown">
                    <img src={currentUser.imageUrl} />
                </div>

                <div className="flex-row align-items-center">
                    <p>You</p>
                    <FontAwesomeIcon icon="caret-down"/>
                </div>
            </button>
            <div className="dropdown-bridge"></div>

            <div className="dropdown-container dropdown-menu bg-color-page-a">  

                <div className="dropdown-header-container">
                    <div className="dropdown-header flex-row">
                        <Link className="flex-row" to={`/users/${currentUser.id}`}>
                            <div id="profile-pic" className="view-profile-pic-container">
                                <img src={currentUser.imageUrl}/>
                            </div>
                            <div className="view-profile-container">
                                <p className="fname">{currentUser.username}</p>
                                <div className="view-profile-wrapper flex-row">
                                    <p>View Profile</p>
                                    <FontAwesomeIcon icon="carret-right"/>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="dropdown-content">
                    <div className="dropdown-option-container">
                        <div className="dropdown-option-wrapper flex-row">
                            <FontAwesomeIcon className="dropdown-option-icon" icon="gift" />
                            <p>Gift card balance: $0.00</p>                            
                        </div>
                    </div>
                    <div className="dropdown-option-container">
                        <div className="dropdown-option-wrapper flex-row">
                            <FontAwesomeIcon className="dropdown-option-icon" icon="comment-alt" />
                            <p>Messages</p>                            
                        </div>
                    </div>
                    <div className="dropdown-option-container">
                        <a href="#">Puchases and reviews</a>
                    </div>
                    <div className="dropdown-option-container">
                        <a href="#">Account settings</a>
                    </div>
                    <div className="dropdown-option-container">
                        <a href="#">Your teams</a>
                    </div>
                    <div className="dropdown-option-container">
                        <a href="#" onClick={logout} className="logout-btn">Sign out</a>
                    </div>
                </div>
            </div>

        </div>
    );

    return (currentUser
        ? personalGreeting()
        : sessionLinks());
};

export default withRouter(Greeting);
