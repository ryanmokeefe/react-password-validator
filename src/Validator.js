import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      valid: true
    }
  }
  
  handleValidate() {
    
  }
  
  handleSubmit(e) {
    e.preventDefault()
    this.handleValidate()
  }

  render() {
    return (
      <div className="form" onSubmit={this.handleSubmit}>
        <h1>Sign Up</h1>
        <input className="email" type="email" placeholder="email" value={this.state.value}/>
        <input className="password" type="password" placeholder="password" value={this.state.value}/>
        <input className="passwordConfirm" type="passwordConfirm" placeholder="confirm password" value={this.state.value}/>
        <input type="submit" placeholder="submit" />
      </div>
    );
  }
}

export default Validator;
