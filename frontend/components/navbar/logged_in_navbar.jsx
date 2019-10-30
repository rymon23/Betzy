import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import {withRouter} from 'react-router-dom';
import SearchBarContainer from '../search/search_bar_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class LoggedInNavbar extends React.Component {
    constructor(props){
        super(props);
        this.redirectToTarget = this.redirectToTarget.bind(this);
        // this.cartClick = this.cartClick.bind(this);
    }

    redirectToTarget(e){
        e.preventDefault();
        debugger
        let { storeId } = this.props;
        const shopManagerLink = storeId ? `/stores/${storeId}` : "/stores/new";
        this.props.history.push(shopManagerLink);
    }

    // cartClick(event){
    //     event.preventDefault();
    // }

    render(){
        return (

            <div className="logged-bar-container">
                <div className="favorites-container clickable nav-icon-link-container">
                    <FontAwesomeIcon className="favorites" icon="heart" size="1x" />
                    <p>Favorites</p>
                </div>

                <div className="notifications-container clickable nav-icon-link-container">
                    <FontAwesomeIcon className="notifications" icon="bell" size="1x" />
                    <div className="flex-row align-items-center">
                        <p>Notifications</p>
                        <FontAwesomeIcon icon="caret-down"/>
                    </div>
                </div>

                <div className="shop-manager-container clickable nav-icon-link-container" onClick={this.redirectToTarget}>
                    <FontAwesomeIcon className="shop-manager" icon="store" size="1x" />
                    <p className="width-max-content">Shop Manager</p>
                </div>

                <GreetingContainer />
            </div>

            // <ul className="navbar-ul">
            //     <li className="notification-nav">
            //         <div className="bell-icon">
            //             <i className="fa fa-bell-o" aria-hidden="true"></i>
            //         </div>
            //         Notifications
            //     <span className="down-icon">
            //             <i className="fa fa-caret-down" aria-hidden="true"></i>
            //         </span>
            //     </li>
            //     <li className="shop-nav" onClick={this.redirectToTarget}>
            //         <div id="store-icon"></div>
            //         Shop Manager
            //     </li>
            //     <GreetingContainer />
            // </ul>
        );
    }
}

export default withRouter(LoggedInNavbar);