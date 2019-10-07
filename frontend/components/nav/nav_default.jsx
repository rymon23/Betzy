import React from "react";
import Logo from "../logo/logo";
import SearchForm from "./search/search";
import { APP_NAME } from "../../util/config_util";

const NavDefault = () => {
  const CLASS_NAME_HEAD = "nav-default";

  return (
    <ul className={`${CLASS_NAME_HEAD}-ul`}>
      { Logo() }

      <SearchForm />

      <li className={`${CLASS_NAME_HEAD}-sell`}>
        Sell on {APP_NAME}
      </li>

      <li className={`${CLASS_NAME_HEAD}-register`}>
        <button className="register-button"
          onClick={() => this.props.logout}>Register</button>
      </li>

      <li className={`${CLASS_NAME_HEAD}-login`}>
        <button className="login-button"
          onClick={() => this.props.logout}>Sign in</button>
      </li>

      <li className={`${CLASS_NAME_HEAD}-cart`}>
        Cart
      </li>
    </ul>);
}

export default NavDefault;