import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import { loading } from "../utility";

class UserProfileShow extends React.Component {
    constructor(props){
        super(props);
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

    render(){
        let { user, store } = this.props;
        let storeLogo;
        debugger

        if (!user) {
            return <div>{loading()}</div>
        }

        if (Boolean(store)) {
            storeLogo = (
                <div>
                    <div id="default-shop-logo">
                    </div>
                    <div className="enter-shop">
                        <span className="profile-shop-name">{store.title}</span>
                        <Link to={`/stores/${store.id}`} className="btn-block">Visit store</Link>
                    </div>
                </div>
            )
        }

        return (
            <div className="user-profile-show">

                <div className="user-info">
                    <div>
                        <div>
                            <img src={user.imageUrl} />
                            <div>
                                <h3>{user.username}</h3>
                                
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

                </div>

                <div className="favorite-lists-navbar">
                    <ul>
                        <li><a href="#">Favorite items</a></li>
                        <li><a href="#">Favorite vendors</a></li>
                    </ul>
                </div>

            </div>

        )
    }
}


export default withRouter(UserProfileShow);