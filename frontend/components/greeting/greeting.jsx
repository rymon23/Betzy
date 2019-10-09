import React from 'react';
import {Link, withRouter} from 'react-router-dom';

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
        <div className="dropdown">
            <button className="dropdown-btn">
                <div className="user-icon">
                    <i className="fa fa-user" aria-hidden="true"></i>
                </div>
                You
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
