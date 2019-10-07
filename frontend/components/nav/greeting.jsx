import React from "react";
import { APP_NAME } from "../../util/config_util";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout, enableModal }) => {
  const sellLink = () => {
    return (
      <div className="user-nav-option" >
        Sell on { APP_NAME }
      </div>
    );
  }

  const sessionOptions = () => {
    return (
      <nav className="session-options">
        <ul>
          <li>
            {sellLink()}
          </li>
          <li>
            <button className="user-nav-option"
              onClick={() => enableModal('signup')}>Register</button>
          </li>
          <li>
            <button className="session-options-login" 
              onClick={() => enableModal('login')}>Sign in</button>          
          </li>
          <li>
            <div className="cart-div">
              <button>Cart</button>
            </div>
          </li>
        </ul>
      </nav>      
    );
  }

  const accountNav = () => {
    return (
      <div className="account-nav">
       <ul>
         <li>
           <Link to={`/stores/${currentUser.id}`} >Store Manager</Link>
         </li>
         <li>
           <button>Favorites</button>
         </li>
         <li>
           <button>Notifications</button>
         </li>
         <li>
           <button className="logout-button" onClick={logout}>Log Out</button>
        </li>
         <li>
           <button>Cart</button>
         </li>
       </ul>
    </div>     
    );
  }

  return (
    currentUser ? accountNav(currentUser, logout) : sessionOptions()
  );
}

export default Greeting;