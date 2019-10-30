import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import {withRouter} from 'react-router-dom';
import Logo from "../logo/logo";
import SearchForm from "../search/search";
import SearchBarContainer from '../search/search_bar_container';


class LoggedInNavbar extends React.Component {
    constructor(props){
        super(props);
        this.redirectToTarget = this.redirectToTarget.bind(this);
        this.cartClick = this.cartClick.bind(this);
    }

    redirectToTarget(e){
        e.preventDefault();
        debugger
        let { storeId } = this.props;
        const shopManagerLink = storeId ? `/stores/${storeId}` : "/stores/new";
        this.props.history.push(shopManagerLink);
    }

    cartClick(event){
        event.preventDefault();
        // this.props.history.push('/cartItems');
    }

    render(){
        return (
            <ul className="navbar-ul">
                <li className="notification-nav">
                    <div className="bell-icon">
                        <i className="fa fa-bell-o" aria-hidden="true"></i>
                    </div>
                    Notifications
                <span className="down-icon">
                        <i className="fa fa-caret-down" aria-hidden="true"></i>
                    </span>
                </li>
                <li className="shop-nav" onClick={this.redirectToTarget}>
                    <div id="store-icon"></div>
                    Shop Manager
                </li>
                <li className="greeting-nav"><GreetingContainer /></li>
                {/* <li className="cart-nav" onClick={this.cartClick}>
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        Cart
                </li> */}

            </ul>
        );
    }
}

export default withRouter(LoggedInNavbar);