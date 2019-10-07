import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import NavDefault from "./nav_default";
import NavLoggedIn from "./nav_logged_in";

const mapStateToProps = (state, ownProps) => {
  return {
    navLoggedIn: Boolean(state.session.currentUser),
  };
};

class Nav extends React.Component {
    constructor(props) {
      super(props);
      this.categories = this.categories.bind(this);
      this.navType = this.navType.bind(this);
    }

    componentDidMount(){
    }

    categories() {
      return (
        <ul className="nav-catagory-ul">
          <div className="category-link"><Link to="/">Gear</Link></div>
          <div className="category-link"><Link to="/">Games</Link></div>
          <div className="category-link"><Link to="/">Mods</Link></div>
          <div className="category-link"><Link to="/">Art</Link></div>
          <div className="category-link"><Link to="/">Books</Link></div>
          <div className="category-link"><Link to="/">Gifts</Link></div>
          <div className="category-link"><Link to="/">Other</Link></div>
        </ul>
      )
    }

    navType() {
      this.props.navLoggedIn ? <NavLoggedIn /> : <NavDefault />
    }

    render() {
       return (
          <div className="nav-container">
            { this.navType() }
            { this.categories() }
          </div>
       )}
  }
  
  export default connect(mapStateToProps)(Nav);
