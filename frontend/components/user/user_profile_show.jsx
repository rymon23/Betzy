import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import { loading, setDarkMode } from "../utility";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { isDataFetched } from "../../util/helpers_util";

class UserProfileShow extends React.Component {
    constructor(props){
        super(props);
        this.state = Object.assign({
            id: '',
            dark_mode: false
        }, this.props.user);
        this.state.isLoaded = false;

        this.updateFetches = this.updateFetches.bind(this);
        this.updateDarkMode = this.updateDarkMode.bind(this);
    }

    updateFetches() {
        debugger
        const promises = [];
        if (!isDataFetched(this.props.user)) promises.push(this.props.fetchAllUsers());
        if (!isDataFetched(this.props.store)) promises.push(this.props.fetchStores());
        const that = this;
        Promise.all(promises)
            .then((result) => {
                that.setState({
                    isLoaded: true,
                });
            });
    }

    componentDidMount(){
        this.updateFetches();

        // this.props.fetchAllUsers();
        // this.props.fetchStores();
    }
    componentDidUpdate(prevProps){
        if (this.props.match.params.userId !== prevProps.match.params.userId){
            this.updateFetches();

            // this.props.fetchAllUsers();
            // this.props.fetchStores();
        }
    }

    updateDarkMode() {
        event.preventDefault();
        const formData = new FormData();
        const newState = !this.state.dark_mode
        this.setState({ ['dark_mode']: newState });
        formData.append('user[id]', this.props.user.id);
        formData.append('user[dark_mode]', newState);
        this.props.updateUser(formData);
    }

    render(){
        let { user, store, currentUser} = this.props;
        let storeLogo;
        debugger

        if (!user || !this.state.isLoaded) {
            return <div>{ loading() }</div>
        };

        const isThisUser = () => {
            return (currentUser && user.id === currentUser.id);
        };

        const profileOwnerButtons = () => {
            const darkModeOn = Boolean(user.dark_mode);
            const buttonStateClass = darkModeOn ? "button-on" : "button-off";
            setDarkMode(darkModeOn)
            return <div className="user-profile-owner-buttons-container">
                <Link to={`/users/${user.id}/edit`} className="edit-button flex-row no-text-dec">
                    <FontAwesomeIcon className="no-text-dec" icon="pencil-alt" />
                    <p className="no-text-dec">Edit profile</p>
                </Link>
                <button className={`dark-mode-button clickable ${buttonStateClass}`}
                    onClick={this.updateDarkMode}>
                    <p>Dark Mode: {darkModeOn ? <strong>On</strong> : <strong>Off</strong>}</p>
                </button>
            </div>  
        };

        const followButton = () => {
            return <button className={`user-profile-button-follow clickable`}>
                <FontAwesomeIcon className="align-self-center" icon="plus"/>
                <p>Follow</p>
            </button>
        };

        const profileButtonOptions = () => {
            return isThisUser() ? profileOwnerButtons() : followButton();
        }

        if (Boolean(store)) {
            storeLogo = (
                <div className="user-profile-visit-shop-container flex-row clickable">
                    <img src={store.imageUrl} />
                    <div className="enter-shop flex-row">
                        <Link to={`/stores/${store.id}`} className="user-profile-visit-shop-wrapper">
                            <span className="profile-shop-name">{store.name}</span>
                            <div className="visit-shop-wrapper flex-row">
                                <span>Visit {isThisUser()? "your" : "their"} shop</span>
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

                        {profileButtonOptions()}
                    </div>

                    <div className="user-profile-about-container">
                        <h3>About</h3>
                        <p>{user.about}</p>
                        <p>Joined {user.createdDate}</p>
                        {storeLogo}
                    </div>
                </div>

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