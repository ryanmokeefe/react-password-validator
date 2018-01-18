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
  // bind statements: 

  // (e)vent needed when setting from input event
  handleEmail(e) {
    this.setState({
      email: e.target.value
    })
    console.log(e.target.value)
  }  

  // (e)vent needed when setting from input event
  handlePassword(e) {
    this.setState({
      password: e.target.password
    })
    console.log(e.target.value)
    
  }

  // (e)vent needed when setting from input event
  handlePasswordConfirm(e) {
    this.setState({
      passwordConfirm: e.target.value
    })
    console.log(e.target.value)
  }


  // (e)vent NOT needed: only Evaluating state vs state with ternary op
  handleValidate() {
    if (this.state.password === this.state.passwordConfirm) {
      this.setState({valid: true})
      console.log("valid password")  
    } else {
      this.setState({valid: false})
      console.log("invalid password")     
    }
  }

  // on submit: call handleValidate: 
  // (e)vent only needed when firing or setting
  handleSubmit(e) {
    e.preventDefault()
    console.log('submit button fired')
    this.handleValidate()
  }

  render() {
    return (
      // attach handle() methods to each input
// had to check solution branch :/
      <div className="form">
        <h1>Sign Up</h1>

        <input onChange={(e) => this.handleEmail(e)}className="email" type="email" placeholder="email" />
        <input onChange={(e) => this.handlePassword}className="password" type="password" placeholder="password" />
        <input onChange={(e) => this.handlePasswordConfirm}className="passwordConfirm" type="password" placeholder="confirm password" />
        <input type="submit" onClick={(e) => this.handleSubmit} value="submit" />

      </div>
    );
  }
}

export default Validator;
