import React from 'react';
import { withRouter } from 'react-router-dom'

class CategoryForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="categories">
                <nav className="nav-category">
                    <button
                        onClick={() => 
                            this.props.history.push("/")}>
                        Gear
                    </button>
                    <button>Games</button>
                    <button>Mods</button>
                    <button>Art</button>
                    <button>Books</button>
                    <button>Ramblings</button>
                </nav>
            </div>
        );
    }
}

export default withRouter(CategoryForm);