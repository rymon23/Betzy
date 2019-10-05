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
          <div className="search-input-div">
            <input type="text" className="seach-input"
              placeholder="Search for items or shops"
              value={this.state.title}
              onChange={this.update('title')}/>              
          </div>
          <button type="submit"></button>
          <input type="submit" className="search-submit"
            value="Search"/>            
        </form>
      </div>
    );
  }

}

export default SearchForm;