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
                    <ul>
                        <li>
                            <button
                                onClick={() => 
                                    this.props.history.push("/")}>
                                Gear
                            </button>                        
                        </li>
                        <li><button>Games</button></li>
                        <li><button>Mods</button></li>
                        <li><button>Art</button></li>
                        <li><button>Books</button></li>
                        <li><button>Ramblings</button></li>
                        <li><button>[]Gifts</button></li>
                    </ul>
                </nav>
            </div>
        );
    }   
}

export default withRouter(CategoryForm);