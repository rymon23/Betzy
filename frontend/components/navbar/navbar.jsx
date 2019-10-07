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
    componentDidUpdate() {
        // debugger
        // this.props.fetchCategories();
    }

    render() {
        debugger
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

        // const cats = (
        //     <ul className="category-ul">
        //         <li><Link to={`/categories/56`}>Jewelry & Accessories</Link></li>
        //         <li><Link to={`/categories/57`}>Clothing & Shoes</Link></li>
        //         <li><Link to={`/categories/58`}>Home & Living</Link></li>
        //         <li><Link to={`/categories/59`}>Wedding & Party</Link></li>
        //         <li><Link to={`/categories/60`}>Toys & Entertainment</Link></li>
        //         <li><Link to={`/categories/61`}>Art & Collectibles</Link></li>
        //         <li><Link to={`/categories/62`}>Craft Supplies & Tools</Link></li>
        //         <li><Link to={`/categories/63`}>Vintage</Link></li>
        //     </ul>
        // );

        const loggedComponent = !loggedIn ? <LoggedOutNavbar/> : <LoggedInNavbar storeId={storeId} />;
        return (
            <div className="navbar">
                {loggedComponent}
                {categoryList()}
                {/* {cats} */}
            </div>
        );
    }
} 
    

const mapStateToProps = state => {
    debugger
    let storeId;

        storeId = false;
    const categories = Object.values(state.entities.categories) || [];
    return {
        loggedIn: Boolean(state.session.currentUser),
        storeId,
        categories
    }
};

const mapDispatchToProps = dispatch => {
    return {
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchCategories: () => dispatch(fetchCategories()),
    };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));