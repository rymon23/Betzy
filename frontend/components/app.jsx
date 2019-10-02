import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <header>
        <Link to="/" className="header-link">
          <h1>Betzy</h1>
        </Link>
      </header>
      <Switch>
        
      </Switch>
    </div>
  );
};

export default App;