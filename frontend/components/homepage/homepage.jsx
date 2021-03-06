import React from 'react';
import {withRouter} from 'react-router-dom';
import { APP_NAME } from "../../util/config_util";
import { loading } from "../utility";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProductsList from '../product/product_list';
import { isDataFetched } from "../../util/helpers_util";


class HomePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isLoaded: false,
        };

        this.updateFetches = this.updateFetches.bind(this);
        this.recommendedOnClick = this.recommendedOnClick.bind(this);
        this.toProductPage = this.toProductPage.bind(this);
    }

    updateFetches() {
        const promises = [];
        if (!isDataFetched(this.props.users)) promises.push(this.props.fetchAllUsers());
        if (!isDataFetched(this.props.stores)) promises.push(this.props.fetchStores());
        if (!isDataFetched(this.props.products)) promises.push(this.props.fetchProducts());
        const that = this;
        Promise.all(promises)
            .then((result) => {
                that.setState({
                    isLoaded: true,
                });
            });        
    }

    componentDidMount() {
        this.updateFetches();
        // this.props.fetchProducts();
        // this.props.fetchStores();
        // this.props.fetchAllUsers();
    }

    recommendedOnClick(e, categoryId){
        e.preventDefault();
        this.props.history.push(`/categories/${categoryId}`);
    }

    toProductPage(product) {
        return (e) => {
            e.preventDefault();
            this.props.history.push(`/stores/${product.store_id}/products/${product.id}`)
        }
    }

    render() {
        let { currentUser, products, stores } = this.props;
        
        const topBanner = () => {
            if ( currentUser ) return null;
            return (
                <div className="homepage-banner-box bg-color-page-b flex-row clickable">
                    <div className="homepage-banner-gifts-container flex-row">
                        <div className="homepage-banner-gifts-text-container">
                            <div className="homepage-banner-gifts-text">
                                <h2>One-of-a-kind... just<br />like them.</h2>
                                <div className="text-with-carot-right">
                                    <span>Shop gifts</span>
                                    <FontAwesomeIcon icon="caret-right" size="1x" />
                                </div>
                            </div>
                        </div>
                        <div className="homepage-banner-img-container">
                            <img className="contained-img" src={window.pagePics.banners[0]} />
                        </div>
                    </div>

                    <div className="homepage-banner-section-2-container">
                        <div className="homepage-banner-section-2">
                            <div className="homepage-banner-shop-holidays">
                                <img className="contained-img" src={window.pagePics.banners[3]} />
                                <h2>Cheerful gatherings, with a twist</h2>
                                <div className="text-with-carot-right">
                                    <span>Shop Thanksgiving</span>
                                    <FontAwesomeIcon icon="caret-right" size="1x" />
                                </div>
                            </div>
                            <div className="explore-container">
                                <div className="text-with-carot-right">
                                    <span>Explore 5-star finds</span>
                                    <FontAwesomeIcon icon="caret-right" size="1x" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )
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
                    <div className="wob-content app-flex-width">
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
                                <button onClick={() => alert("Help Center is currently under construction")}>Go to Help Center</button>
                            </div>                       
                        </div>

                    </div>
                </div>
            );
        }

        return (
            <div className="homepage">
                <section className="app-flex-width">

                    <div className="homepage-banner-container">
                        { currentUser? 
                            null
                        :
                            <h1 className="homepage-banner-head">
                                If it's handcrafted, vintage, custom, or unique, it's on {APP_NAME}.
                            </h1>
                        }

                        { currentUser? null : topBanner() }

                        { middleBanner() }
                    </div>

                    <div className="bottom-banner">
                        {
                        currentUser ? 
                            <div className="welcome-back-div">
                                <h3 className="welcome-back" >Welcome back { currentUser.username }</h3>                           
                            </div>
                            : null
                        }
                            <div className="popular-right-now-container">
                                <h2 className="popular-right-now">Popular right now</h2> 
                                { this.state.isLoaded? 
                                    <ProductsList 
                                    products={products} 
                                    stores={stores} 
                                    clickEvent={this.toProductPage} />                           
                                    :
                                    loading()            
                                }

                                {/* { sampleProducts(products, stores) } */}
                            </div>
                        
                    </div> 
                </section>

                { whatIsBetzy() }
            </div>
        )
    }
}

export default withRouter(HomePage)