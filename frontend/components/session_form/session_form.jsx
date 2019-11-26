import React from "react";
import { DEMO_USER } from "../../util/config_util";

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {username: "", email: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.demoUserButton = this.demoUserButton.bind(this);
    this.inputFirstName = this.inputFirstName.bind(this);
  }

  update(field){
    return (e) =>
      this.setState({[field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.action(user)
      .then(() => this.props.disableModal());
  }

  handleDemo(e) {
    e.preventDefault();
    this.props.action(DEMO_USER)
      .then(() => this.props.disableModal());
  }

  demoUserButton() {
    if (this.props.formType !== "login") return null;
    return (
      <button className="credential-submit-demo"
        onClick={this.handleDemo}>Demo User
      </button>
    )
  }

  inputFirstName() {
    if (this.props.formType === "login") return null;
    return (
      <label>First name
         <br />
        <input type="text"
          value={this.state.username}
          onChange={this.update('username')}
          className="credential-input" />
      </label>
    );
  }

  renderErrors(){
    const { errors } = this.props;
    if ( errors ){
      const errors = this.props.errors.map((err, ix)=> {
        return (<li key={`error-${ix}`}>{err}</li>)
      });
      return (<ul>{errors}</ul>)
    }
  }

  render(){

    debugger
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box bg-color-page-a">
          <h1 className="form-title" >{this.props.formTitle}</h1>
            <div className={`login-form-errors`}>
              {this.renderErrors()}
            </div>
          <div className="credentials-form">
            <br/>
            <label>Email address
              <br/>
              <input type="email" 
                value={this.state.email}
                onChange={this.update('email')}
                className="credential-input" />
            </label>
            <br/>
            { this.inputFirstName() }
            <br/>
            <label>Password
              <br/>
              <input type="password" 
                value={this.state.password}
                onChange={this.update('password')}
                className="credential-input" />
            </label>
            <br/>
              <div className="credential-submit-container">
                <input type="submit" 
                  value={this.props.buttonType}
                  className="credential-submit-submit"/>
                { this.demoUserButton() }  
              </div>
          </div>
          <div className="login-form-terms-container">
            <p>
              By clicking Register, Continue with Google, or Continue with Facebook, you agree to Etsy's Terms of Use and Privacy Policy. Etsy may send you communications; you may change your preferences in your account settings. We'll never post without your permission.              
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;