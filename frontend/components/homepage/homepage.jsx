import React from "react";
import { connect } from "react-redux";

import Content from "./content";
import Center from "./center";
import Footer from "./footer";

const Welcome = ( {currentUser} ) => {
    if (!currentUser) return null;
    return (
        <div className="homepage-welcome">
            Welcome back, {currentUser}!
        </div>
    )
}

const Homepage = ({ currentUser }) => {
    return (
        <div className="homepage-div">
            <Content />
            <div className="homepage-welcome">
                {/* Welcome back, {currentUser.username}! */}
            </div>
            {/* <Welcome /> */}
            <Center />
            <Footer />
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return { currentUser: state.session.currentUser };
};

export default connect(mapStateToProps)(Homepage);