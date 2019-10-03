import React from "react";

const TopNav = () => {
  const sessionOptions = () => {
    return (
      <nav className="session-options">
        <button onClick={() => enableModal('signup')}>Register</button>
        <button onClick={() => enableModal('login')}>Sign in</button>
      </nav>
    );
  }

  const loggedInGreeting = () => {
    return (
      <hgroup className="greeting-hg">
        <h2 className="greeting-text">Welcome back, {currentUser.username}!</h2>
        <button className="logout-button" onClick={logout}>Log Out</button>
      </hgroup>
    );
  }

  return (
    currentUser ? loggedInGreeting(currentUser, logout) : sessionOptions()
  );
}

export default TopNav;