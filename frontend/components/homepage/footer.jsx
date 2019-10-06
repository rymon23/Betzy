import React from "react";

const COMPONENT_NAME = "Footer";

const Footer = ({ currentUser }) => {
    return (
        <div className={`${COMPONENT_NAME}-parent-div homepage-child`}>
            <div className={`${COMPONENT_NAME}-div`}>
                <h1>{COMPONENT_NAME}</h1>
                <ul>
                    <li>{COMPONENT_NAME} - Content</li>
                </ul>
            </div>
            <footer className={`${COMPONENT_NAME}-footer`}>
                {/* Footer */}
            </footer>
        </div>
    );
}

export default Footer;