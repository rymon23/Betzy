import React from 'react';
import {connect} from 'react-redux';
import LoggedInNavbar from './logged_in_navbar';
import LoggedOutNavbar from './logged_out_navbar';
import {withRouter, Link} from 'react-router-dom'; 
import { fetchAllUsers } from '../../actions/user_actions';
import { fetchCategories } from '../../actions/category_actions';


class Navbar extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.fetchAllUsers();
        this.props.fetchCategories();
    }

    render() {
        let { loggedIn, storeId, categories } = this.props;

        const categoryList = () => {
            if (!categories.length) return null;
            return ( <ul className="category-ul"> 
                { categories.slice(0,6).map((category) => 
                { return (<li key={category.id}>
                            <Link to={`/categories/${category.id}`}>
                                {category.name}
                            </Link>
                        </li>)})}</ul>)
        }

        const loggedComponent = !loggedIn ? <LoggedOutNavbar/> : <LoggedInNavbar storeId={storeId} />;
        return (
            <div className="navbar">
                {loggedComponent}
                {categoryList()}
            </div>
        );
    }
} 
    
const mapStateToProps = (state) => {
    debugger
    const currentUser = state.session.currentUser; 
    let userIsVendor;
    if (currentUser) userIsVendor = currentUser.store;
    let storeId;

        storeId = false;
    const categories = Object.values(state.entities.categories) || [];
    return {
        loggedIn: Boolean(state.session.currentUser),
        storeId,
        categories
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        fetchCategories: () => dispatch(fetchCategories()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));