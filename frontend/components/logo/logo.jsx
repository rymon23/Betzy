import React from 'react';
import { Link } from 'react-router-dom';
import { APP_NAME } from "../../util/config_util";

const Logo = () => {
    return (
      <div className="logo-main">
          <Link to="/" className="logo-link">
            {APP_NAME}
          </Link>
      </div>
    );  
}

export default Logo;