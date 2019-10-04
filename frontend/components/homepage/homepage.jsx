import React from "react";
import { connect } from "react-redux";

import Content from "./content";
import Center from "./center";
import Footer from "./footer";
import { APP_NAME } from "../../util/config_util";

const HOMEPAGE_TEXT_HEADING = `If it's handcrafted, vintage, custom, or unique it's on ${APP_NAME}`

class Homepage extends React.Component {
    constructor(props){
        super(props);
        this.WelcomeCurrentUser = this.WelcomeCurrentUser.bind(this);
        this.homepageUnderContent = this.homepageUnderContent.bind(this);
    }

    welcomeCurrentUser(currentUser) {
        if (!currentUser) return null;
        return (
            <div className="homepage-welcome">
                <div className="homepage-welcome-text">
                    Welcome back, {currentUser.username}!
                </div>               
            </div>);

    }

    websiteQuickDecription() {
        const CLASS_HEAD = "homepage-under-content";
        return (
            <div className={`${CLASS_HEAD}`}>
                <div className={`${CLASS_HEAD}-div`}>
                    <h3>Unique everything</h3>
                    <p>bla bla bla</p>
                </div>
                <div className={`${CLASS_HEAD}-div`}>
                    <h3>Independent sellers</h3>
                    <p>bla bla bla</p>
                </div>
                <div className={`${CLASS_HEAD}-div`}>
                    <h3>Secure shopping</h3>
                    <p>bla bla bla</p>
                </div>
            </div>)           
    }

    homepageUnderContent(currentUser){
        currentUser ? this.welcomeCurrentUser(currentUser) : this.websiteQuickDecription()
    }

    render(){
        return (
            <div className="homepage-div">
                <div className="homepage-text-heading">
                    <h1 className="homepage-text">
                        { HOMEPAGE_TEXT_HEADING }  
                    </h1>
                </div>
                <Content />
                    { this.homepageUnderContent(this.props.currentUser) }
                <Center />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { currentUser: state.session.currentUser };
};

export default connect(mapStateToProps)(Homepage);