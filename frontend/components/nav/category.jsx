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
                <nav className="category-nav">
                    <ul>
                        <li className="category-link"><Link to="/">Gear</Link></li>
                        <li className="category-link"><Link to="/">Games</Link></li>
                        <li className="category-link"><Link to="/">Mods</Link></li>
                        <li className="category-link"><Link to="/">Art</Link></li>
                        <li className="category-link"><Link to="/">Books</Link></li>
                        <li className="category-link"><Link to="/">Gifts</Link></li>
                        <li className="category-link"><Link to="/">Other</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }   
}

export default withRouter(CategoryForm);