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
    // bind statements: 
    this.handlePassword = this.handlePassword.bind(this)
    this.handlePasswordConfirm = this.handlePasswordConfirm.bind(this)
    this.handleValidate = this.handleValidate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
  }


  // (e)vent needed when setting from input event
  handleEmail (e) {
    this.setState({
      email: e.target.value
    })
    console.log(e.target.value)
  }  

  // (e)vent needed when setting from input event
  handlePassword (e) {    
    this.setState({
      password: e.target.value
    })
    console.log(e.target.value)
    console.log(this.state.password)
    
  }

  // (e)vent needed when setting from input event
  handlePasswordConfirm (e) {
    this.setState({
      passwordConfirm: e.target.value
    })
    console.log(e.target.value)
  }

  // on submit: call handleValidate: 
  // (e)vent only needed when firing or setting
  handleSubmit (e) {
    e.preventDefault()
    console.log('submit button fired')
    this.handleValidate()
  }

  // (e)vent NOT needed: only Evaluating state vs state with ternary op
  handleValidate () {
    this.setState(this.state.password === this.state.passwordConfirm ? {valid: true} : {valid: false})

  }


  render() {
    // var to be displayed if passes match or not:
    let validText = this.state.valid === true ? "Password is valid" : "Passwords do not match"

    return (
      // attach handle() methods to each input
// had to check solution branch :/
      <div className="form">
        <h1>Sign Up</h1>

        <input onChange={(e) => this.handleEmail(e)} type="email" placeholder="email" />
        <input onChange={this.handlePassword} type="password" placeholder="password" />
        <input onChange={this.handlePasswordConfirm} type="password" placeholder="confirm password" />
        <input type="submit" onClick={this.handleSubmit} value="submit" />

        <p>{validText}</p>

      </div>
    );
  }
}

export default Validator;

