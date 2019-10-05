import React from "react";
import { connect } from "react-redux";

import Content from "./content";
import Center from "./center";
import Footer from "./footer";
import { APP_NAME } from "../../util/config_util";

const HOMEPAGE_TEXT_HEADING = `If it's handcrafted, vintage, custom, or unique, it's on ${APP_NAME}`

class Homepage extends React.Component {
    constructor(props){
        super(props);
        this.welcomeCurrentUser = this.welcomeCurrentUser.bind(this);
        this.homepageUnderContent = this.homepageUnderContent.bind(this);
        this.websiteQuickDecription = this.websiteQuickDecription.bind(this);
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
                    <span className={`${CLASS_HEAD}-header`}>
                        Unique everything
                    </span>
                    <p className={`${CLASS_HEAD}-paragraph`}>
                        We have millions of one-of-a-kind items, so you can find whatever you need (or really, really want).
                    </p>
                </div>
                <div className={`${CLASS_HEAD}-div`}>
                    <span className={`${CLASS_HEAD}-header`}>
                        Independent sellers
                    </span>
                    <p className={`${CLASS_HEAD}-paragraph`}>
                        Buy directly from someone who put their heart and soul into making something special.
                    </p>
                </div>
                <div className={`${CLASS_HEAD}-div`}>
                    <span className={`${CLASS_HEAD}-header`}>
                        Secure shopping
                    </span>
                    <p className={`${CLASS_HEAD}-paragraph`}>
                        We use best-in-class technology to protect your transactions.
                    </p>
                </div>
            </div>)           
    }

    homepageUnderContent(currentUser){
        return currentUser ? this.welcomeCurrentUser(currentUser) : this.websiteQuickDecription()
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
                <footer>
                    True footer
                </footer>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { currentUser: state.session.currentUser };
};

export default connect(mapStateToProps)(Homepage);