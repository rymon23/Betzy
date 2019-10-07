import React from "react";
import { withRouter } from "react-router-dom";
import Logo from "../logo/logo";
import SearchForm from "./search/search";

class NavLoggedIn extends React.Component {
  constructor(props){
    super(props);
    this.shopManager = this.shopManager.bind(this);
    this.cart = this.cart.bind(this);
  }

  shopManager(e) {
    e.preventDefault();
    
    const link = this.props.storeId ? 
      `/stores/${this.props.storeId}`
      :
      `/stores/new`;
      this.props.history.push(link);
  }

  cart(e) {
    e.preventDefault();
    //do stuff
  }

  render() {
    const CLASS_NAME_HEAD = "nav-logged-in";

    return (
      <ul className={`${CLASS_NAME_HEAD}-ul`}>
        { Logo() }

        <SearchForm />

        <li className={`${CLASS_NAME_HEAD}-notifications`}>
          Notifications
        </li>

        <li className={`${CLASS_NAME_HEAD}-shop`}
          onClick={() => this.shopManager}>
          Shop Manager
        </li>

        <li className={`${CLASS_NAME_HEAD}-logout`}>
          <button className="logout-button" 
            onClick={() => this.props.logout}>Log Out</button>
        </li>

        <li className={`${CLASS_NAME_HEAD}-cart`} 
          onClick={() => this.cart}>
            Cart
        </li>
      </ul>);
  }
}

export default withRouter(NavLoggedIn);