import React from 'react';
import {withRouter} from 'react-router-dom';
import { APP_NAME } from "../../util/config_util";

class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.recommendedOnClick = this.recommendedOnClick.bind(this);
    }
    componentDidMount() {
        this.props.fetchCategories();
        this.props.fetchProducts();
        this.props.fetchStores();
        this.props.fetchAllUsers();
    }

    recommendedOnClick(e, categoryId){
        e.preventDefault();
        this.props.history.push(`/categories/${categoryId}`);
    }

    render() {
        let { currentUser } = this.props;

        const middleBanner = () => {
            if ( currentUser ) return null;
            return (
                <div className="middle-banner">
                    <ul className="middle-banner-list">
                        <li>
                            <h3>
                                <i className="fa fa-check" aria-hidden="true"></i>
                                Unique everything
                                </h3>
                            <p>We have millions of one-of-a-kind items, so you can find whatever you need
                                    (or really, really want).</p>
                        </li>
                        <li>
                            <h3>
                                <i className="fa fa-check" aria-hidden="true"></i>
                                Independent sellers
                                </h3>
                            <p>Buy directly from someone who put their heart and soul into making something
                                    special.</p>
                        </li>
                        <li>
                            <h3>
                                <i className="fa fa-check" aria-hidden="true"></i>
                                Secure shopping
                                </h3>
                            <p>We use best-in-class technology to protect your transactions.</p>
                        </li>
                    </ul>
                </div>
            )            
        }

        return (
            <div className="homepage">

                <h1>If it's handcrafted, vintage, custom, or unique, it's on {APP_NAME}.</h1>

                <div className="homepage-banner">
                    <h1>Personalized jewelry shines a little brighter</h1>
                    <button>
                        Shop custom jewelry
                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                    </button>
                </div>

                { middleBanner() }

                <div className="bottom-banner">
                    {
                       currentUser ? 
                       <div className="welcome-back-div">
                            <h3 className="welcome-back" >
                                Welcome back { currentUser.username }</h3>                           
                       </div>
 
                        : 
                        <div className="popular-right-now-div">
                            <h2 className="popular-right-now">
                                Popular right now</h2>                            
                        </div>

                    }
                    <ul className="category-images-ul">
                        <li onClick={this.recommendedOnClick}>
                            <div id="recommended"></div>
                            <h4>Sub category</h4>
                        </li>
                    </ul>

                </div>
            </div>
        )
    }
}

export default withRouter(HomePage)