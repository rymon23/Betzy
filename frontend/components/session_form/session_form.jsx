import React from "react";

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field){
    return (e) =>
      this.setState({[field]: e.currentTarget.value });
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state );
    this.props.action(user).then(this.props.disableModel);
  }

  renderErrors(){
    const errors = this.props.errors.map((err, ix)=> {
      return (<li key={`error-${ix}`}>{err}</li>)
    });
    return (<ul>{errors}</ul>)
  }
  
  render(){
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h1 className="form-title" >{this.props.formTitle}</h1>
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
            <label>First name
              <br/>
              <input type="text" 
                value={this.state.username}
                onChange={this.update('username')}
                className="credential-input" />
            </label>
            <br/>
            <label>Password
              <br/>
              <input type="password" 
                value={this.state.password}
                onChange={this.update('password')}
                className="credential-input" />
            </label>
            <br/>
            <input type="submit" 
              value={this.props.buttonType}
              className="credential-submit"/>
            <button className="credential-submit demo"
               onClick={() => this.props.demoLogin()}>Demo User</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;