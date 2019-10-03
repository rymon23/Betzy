import React from 'react';
import { Link } from 'react-router-dom';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    //DO LATER
  }

  render() {
    return (
      <div className="search-div">
        <form onSubmit={this.handleSubmit} className="search-form">
          <ul>
            <input type="text" className="seach-field"
              placeholder="Search for items or shops"
              value={this.state.title}
              onChange={this.update('title')}/>
            <input type="submit" className="search-submit"
              value="Search"/>            
          </ul>
        </form>
      </div>
    );
  }

}

export default SearchForm;