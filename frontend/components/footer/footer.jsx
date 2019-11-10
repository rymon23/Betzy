import React from "react";
import { APP_NAME } from "../../util/config_util";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, } from '@fortawesome/free-solid-svg-icons'

//FOOTER
export default () => {

  const socialMediaContent = () => {
    return (
      <div className="app-social-media-container">
        <div className="app-social-media-content">
          <button className="app-social-media-download-button">
            {`Download the ${APP_NAME} App`}
          </button>
          <br/>
          <div className="app-social-media-tags">
            <FontAwesomeIcon className="sm-link" icon={['fab','instagram']} size="2x"/>
            <FontAwesomeIcon className="sm-link" icon={['fab','facebook-square']} size="2x"/>
            <FontAwesomeIcon className="sm-link" icon={['fab','pinterest']} size="2x"/>
            <FontAwesomeIcon className="sm-link" icon={['fab','twitter']} size="2x"/>
            <FontAwesomeIcon className="sm-link" icon={['fab','youtube']} size="2x"/>
          </div>
        </div>
      </div>
    )
  }

  const subscribe = () => {
    return (
      <div className="app-footer-subscribe-container">
        <h3>Get fresh {APP_NAME} trends and unique gift ideas delivered right to your inbox.</h3>
        <div>
          <form className='subscribe'>
            <div className='subscribe-container'>
              <input className='subscribe-input' type="text"
                placeholder='Enter your email' />
              <button className='subscribe-button' type="submit">
                Subscribe
                    </button>
            </div>
          </form>
        </div>
      </div>      
    );
  }

  const footer = () => {
    return (
      // <div className="footer-container static-width">
      <div className="app-flex-width">
        <div className="footer-container">
          <button className="footer-left-button">
            <span>United States</span>
            <span className="footer-span-middle">English (US)</span>
            <span>$ (USD)</span>
          </button>
          <div className="footer-links-container">
            <span>© 2019 {APP_NAME}, Inc.</span>
            <a href="">Terms of Use</a>
            <a href="">Privacy</a>
            <a href="">Interest-based ads</a>
          </div>
        </div>
      </div>
    )
  }
  
  const footerColumns = () => {
    return (
      <div className="app-footer-column-container">
        <div className="app-footer-column">
          <div>
            <h3>Shop</h3>
            <ul>
              <li>Gift cards</li>
              <li>{APP_NAME} blog</li>
            </ul>
          </div>
        </div>

        <div className="app-footer-column">
          <h3>Sell</h3>
          <ul>
            <li>Sell on {APP_NAME}</li>
            <li>Teams</li>
            <li>Forums</li>
            <li>Affiliates</li>
          </ul>
        </div>

        <div className="app-footer-column">
          <h3>About</h3>
          <ul>
            <li>{APP_NAME}, Inc.</li>
            <li>Policies</li>
            <li>Investors</li>
            <li>Careers</li>
            {/* <li>Press</li> */}
            {/* <li>Impact</li> */}
          </ul>
        </div>

        <div className="app-footer-column">
          <h3>Help</h3>
          <ul>
            <li>Help Center</li>
          </ul>
            {socialMediaContent() }
        </div>
      </div>
    );
  }

  return (
    <div className="app-footer-bar" >

      <div className="app-footer-ridge-top"></div>

        <div className="justify-center">
          <div className="app-flex-width">

            {/* <div className="app-footer-container">
              {subscribe()}
            </div> */}

            <div className="app-footer-container">
              {/* <div className="app-footer-content"> */}
                {footerColumns()}
              {/* </div> */}
            </div>

          </div>

        </div>


      <footer>{footer()}</footer>
    </div>
  );
};