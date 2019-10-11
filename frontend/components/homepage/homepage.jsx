import React from 'react';
import {withRouter} from 'react-router-dom';
import { APP_NAME } from "../../util/config_util";
import { loading } from "../utility";

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
        let { currentUser, products } = this.props;

        const sampleProducts = (products) => {
            if ( Object.keys(products).length === 0 ) {
                return <div>{ loading() }</div>
            }
            const sampleProducts = products.map((product) => {
                if (product === undefined) return null;
                return (
                    <li key={product.id} >
                        <img src={product.imageUrls[0]} />
                        <p>{product.name.slice(0, 35)}...</p>
                        {/* <p className="category-shop-name">
                        <Link to={`/stores/${product.store_id}`}>
                            {stores[product.store_id].title}</Link>
                    </p> */}
                        {/* {<p className="category-shop-name">{stores[product.store_id].title}</p>} */}
                        {<p>USD {product.price}</p>}
                    </li>
                )
            });
            return sampleProducts;
        }


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

        const whatIsBetzy = () => {
            return (
                <div className="wob-container">
                    <div className="wob-content static-width">
                        <div className="wob-head-container">
                            <div className="wob-head">
                                <h1>What is {APP_NAME}?</h1>
                                <a href="">Read our wonderfully weird story</a>
                            </div>
                        </div>

                        <div className="wob-content-column-container">
                            <div className="wob-column">
                                <div>
                                    <h2>A one-of-a-kind community</h2>
                                    <p>
                                    {APP_NAME} is a global online marketplace, where people come together to make, sell, buy, and collect unique items.
                                    </p>
                                </div>
                            </div>
                            <div className="wob-column">
                                <div>
                                    <h2>Support independent creators</h2>
                                    <p>
                                    There’s no {APP_NAME} warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.
                                    </p>
                                </div>
                            </div>
                            <div className="wob-column">
                                <div>
                                    <h2>Peace of mind</h2>
                                    <p>
                                    Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="wob-help-container">
                            <div className="wob-help">
                                <h2>Have a question? Well, we’ve got some answers.</h2>
                                <button>Go to Help Center</button>
                            </div>                       
                        </div>

                    </div>
                </div>
            );
        }

        return (
            <div className="homepage">
                <div className="static-width">
                    <div className="homepage-banner-container">
                        <h1>
                            If it's handcrafted, vintage, custom, or unique, it's on {APP_NAME}.
                        </h1>

                        <div className="homepage-banner">
                            <h1>Personalized jewelry shines a little brighter</h1>
                            <button>
                                Shop custom jewelry
                                <i className="fa fa-caret-right" aria-hidden="true"></i>
                            </button>
                        </div>

                        { middleBanner() }
                    </div>

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
                                <div className="products-listing" id="category-show">
                                    {/* <h2>{category.name}</h2> */}
                                    <ul>
                                        {sampleProducts(products)}
                                    </ul>
                                </div>                        
                            </div>

                        }
                        {/* <ul className="category-images-ul">
                            <li onClick={this.recommendedOnClick}>
                                <div id="recommended"></div>
        
                                <ul>
                                    {sampleProducts(products)}
                                </ul>
                            </li>
                        </ul> */}
                    </div>                    
                </div>

                { whatIsBetzy() }
            </div>
        )
    }
}

export default withRouter(HomePage)