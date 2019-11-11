import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import {withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class LoggedInNavbar extends React.Component {
    constructor(props){
        super(props);
        this.toStorePage = this.toStorePage.bind(this);
        this.toCartPage = this.toCartPage.bind(this);
        // this.cartClick = this.cartClick.bind(this);
    }

    toStorePage(e){
        e.preventDefault();
        debugger
        let { storeId } = this.props;
        const shopManagerLink = storeId ? `/stores/${storeId}` : "/stores/new";
        this.props.history.push(shopManagerLink);
    }

    toCartPage(e){
        e.preventDefault();
        debugger
        let { currentUser } = this.props;
        const cartLink = currentUser ? `/users/${currentUser.id}/line_items` : "/";
        this.props.history.push(cartLink);
    }

    render(){
        return (

            <div className="logged-bar-container align-items-flex-end">
                <div className="favorites-container clickable nav-icon-link-container">
                    <FontAwesomeIcon className="favorites logged-nav-options-icon" icon="heart" size="1x" />
                    <p>Favorites</p>
                </div>

                <div className="notifications-container clickable nav-icon-link-container">
                    <FontAwesomeIcon className="notifications logged-nav-options-icon" icon="bell" size="1x" />
                    <div className="flex-row align-items-center">
                        <p>Notifications</p>
                        <FontAwesomeIcon icon="caret-down"/>
                    </div>
                </div>

                <div className="shop-manager-container clickable nav-icon-link-container" onClick={this.toStorePage}>
                    <FontAwesomeIcon className="shop-manager logged-nav-options-icon" icon="store" size="1x" />
                    <p className="width-max-content">Shop Manager</p>
                </div>

                <GreetingContainer />
            </div>
        );
    }
}

export default withRouter(LoggedInNavbar);