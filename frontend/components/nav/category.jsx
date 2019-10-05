import React from 'react';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';

class CategoryForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="category-div">
                <div className="category-link"><Link to="/">Gear</Link></div>
                <div className="category-link"><Link to="/">Games</Link></div>
                <div className="category-link"><Link to="/">Mods</Link></div>
                <div className="category-link"><Link to="/">Art</Link></div>
                <div className="category-link"><Link to="/">Books</Link></div>
                <div className="category-link"><Link to="/">Gifts</Link></div>
                <div className="category-link"><Link to="/">Other</Link></div>
            </div>
        );
    }   
}

export default withRouter(CategoryForm);