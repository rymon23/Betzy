import React from "react";

const Greeting = ({ currentUser, logout, enableModal }) => {
  const sessionOptions = () => {
    return (
      <nav className="session-options">
        <ul>
          <li>
            <button onClick={() => enableModal('signup')}>Register</button>
          </li>
          <li>
            <button onClick={() => enableModal('login')}>Sign in</button>          
          </li>
        </ul>
      </nav>      
    );
  }

  const loggedInGreeting = () => {
    return (
     <hgroup className="greeting-hg">
      <button className="logout-button" onClick={logout}>Log Out</button>
    </hgroup>     
    );
  }

  return (
    currentUser ? loggedInGreeting(currentUser, logout) : sessionOptions()
  );
}

export default Greeting;