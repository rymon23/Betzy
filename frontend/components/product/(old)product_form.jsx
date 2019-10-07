import React from "react";
import { withRouter } from "react-router-dom";

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const product = Object.assign({}, this.state);
    this.props.action(product);
  }

  render() {
    const CLASS_NAME_HEAD = "product-form";

    return (
      <div className={`${CLASS_NAME_HEAD}-container`}>
        <form onSubmit={this.handleSubmit} className={`${CLASS_NAME_HEAD}-box`}>
          <h1 className="form-title" >{this.props.formTitle}</h1>
          Product data goes here
        </form>
      </div>
    );
  }
}

export default withRouter(ProductForm);