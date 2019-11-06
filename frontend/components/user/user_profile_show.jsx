import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import { loading } from "../utility";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class UserProfileShow extends React.Component {
    constructor(props){
        super(props);
        this.state = Object.assign({
            dark_mode: false
        }, this.props.user);
        this.updateDarkMode = this.updateDarkMode.bind(this);
    }

    componentDidMount(){
        this.props.fetchAllUsers();
        this.props.fetchStores();
    }

    componentDidUpdate(prevProps){
        if (this.props.match.params.userId !== prevProps.match.params.userId){
            this.props.fetchAllUsers();
            this.props.fetchStores();
        }
    }

    updateDarkMode() {
        debugger
        event.preventDefault();
        return (event) => {
            this.props.user.dark_mode? 
                this.setState({['dark_mode']: false})
                : this.setState({ ['dark_mode']: true });
        };
    }

    render(){
        let { user, store } = this.props;
        let storeLogo;
        debugger

        if (!user) {
            return <div>{loading()}</div>
        };

        const darkMode = () => {
            const darkModeOn = Boolean(user.dark_mode);
            const buttonStateClass = darkModeOn? "button-on" : "button-off";
            return <button className={`dark-mode-button clickable ${buttonStateClass}`}
                        onClick={this.updateDarkMode}> 
                    <p>Dark Mode {darkModeOn ? <strong>On</strong> : <strong>Off</strong>}</p>
                </button>
        };

        if (Boolean(store)) {
            storeLogo = (
                <div className="user-profile-visit-shop-container flex-row clickable">
                    <img src={store.imageUrl} />
                    <div className="enter-shop flex-row">
                        <Link to={`/stores/${store.id}`} className="user-profile-visit-shop-wrapper">
                            <span className="profile-shop-name">{store.title}</span>
                            <div className="visit-shop-wrapper flex-row">
                                <span>Visit your shop</span>
                                <FontAwesomeIcon className="user-profile-visit-shop-caret" icon="caret-right" size="2x"/>
                            </div>
                        </Link>                            
                    </div>
                </div>
            )
        }

        return (
            <div className="user-profile-show">
                <div className="user-profile-info flex-row">

                    <div className="user-profile-pic-show-container">
                        <img src={user.imageUrl} />
                        <button className="user-profile-camera-button clickable">
                            <FontAwesomeIcon icon="camera" size="2x" />
                        </button>
                    </div>

                    <div className="user-profile-show-edit-container">
                        <h3>{user.username}</h3>
                        <div className="flex-row">
                            <p>0 Following</p>
                            <p>0 Followers</p>
                        </div>
                        <Link to={`/users/${user.id}/edit`} className="edit-button flex-row no-text-dec">
                            <FontAwesomeIcon className="no-text-dec" icon="pencil-alt" />
                            <p className="no-text-dec">Edit profile</p>
                        </Link>

                        <div className="user-profile-dark-mode-container ">
                            {/* <button className="dark-mode-button clickable"> */}
                                {darkMode()}
                            {/* </button> */}
                        </div>
                    </div>

                    <div className="user-profile-about-container">
                        <h3>About</h3>
                        <p>Joined {user.createdDate}</p>
                        {storeLogo}
                    </div>
                </div>

                {/* <div className="user-info">
                    <div>
                        <div>
                            <img src={user.imageUrl} />
                            <div>
                                <h3>{user.username}</h3>
                                <div className="flex-row">
                                    <p>0 Following</p>
                                    <p>0 Followers</p>
                                </div>
                                <Link to={`/users/${user.id}/edit`} className="btn-block">
                                    <i className="fa fa-pencil" aria-hidden="true"></i>
                                    Edit profile
                                </Link> 
                            </div>
                        </div>
                        <div className="shop-section">
                            <h4>About</h4>
                            {storeLogo}
                        </div>
                    </div>
                </div> */}

                <div className="favorite-lists-navbar">
                    <ul>
                        <li><a href="#">Favorite items</a></li>
                        <li><a href="#">Favorite shops</a></li>
                        <li><a href="#">Lists</a></li>
                    </ul>
                </div>
            </div>

        )
    }
}


export default withRouter(UserProfileShow);