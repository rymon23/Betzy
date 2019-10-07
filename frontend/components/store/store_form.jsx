import React from "react";
import { withRouter } from "react-router-dom";

class StoreForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const store = Object.assign({}, this.state);
    this.props.action(store);
  }

  renderErrors() {
    const errors = this.props.errors.map((err, ix) => {
      return (<li key={`error-${ix}`}>{err}</li>)
    });
    return (<ul>{errors}</ul>)
  }

  render() {
    debugger
    const CLASS_NAME_HEAD = "store-form";

    return (
      <div className={`${CLASS_NAME_HEAD}-container`}>
        <form onSubmit={this.handleSubmit} className={`${CLASS_NAME_HEAD}-box`}>
          <h1 className="form-title" >{this.props.formTitle}</h1>

          {/* <div className={`${CLASS_NAME_HEAD}-errors`}>
            {this.renderErrors()}
          </div> */}

          <div className="credentials-form">
            <br />
            <label>Store Title
              <br />
              <input type="text"
                value={this.state.title}
                onChange={this.update('title')}
                className="credential-input" />
            </label>

            <input type="submit"
              value={this.props.buttonType}
              className="credential-submit-submit"
              />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(StoreForm);