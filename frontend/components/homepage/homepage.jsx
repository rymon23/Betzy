import React from "react";

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
            <Welcome />
            <Center />
            <Footer />
        </div>
    );
};

export default Homepage;