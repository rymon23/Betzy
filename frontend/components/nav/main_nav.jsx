import React from 'react';
import { Link } from 'react-router-dom';
import CategoryForm from './category_form';

const SELL_BUTTON_TEXT = "Sell on Betzy";

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

    greetCurrentUser(){
        return (
            <div className="current-user-nav">
                <Link to='/'>{ SELL_BUTTON_TEXT }}</Link>
                <Link to={`/users/${this.props.currentUser.id}`}>You</Link>
                <button className="logout-button"
                    onClick={this.props.logout}>
                        Log out
                </button>
            </div>
        );
    }

    userAuthOptions(){
        return (
            <nav className="user-auth-options">
                <Link className="sell-link" to={"/"} className="Register">
                { SELL_BUTTON_TEXT }
                </Link>
                <button onClick={() => this.props.enableModal('signup')} className="Register">Register</button>
                <button onClick={() => this.props.enableModal('login')} className="login">Sign in</button>
            </nav> );
    }


    render(){
        return (
            <div className="main-nav-parent">
                <nav className="nav-bar">
                    <div>
                        <Link to="/" className="header-link">
                            <h1 className="logo">Betzy</h1>
                        </Link>
                    </div>
                    <div>
                        {this.navDisplay()}
                    </div>
                </nav>
                <CategoryForm />
            </div>
        );
    }

}

export default MainNav;