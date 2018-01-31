import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {

  renderAlert(){
    if (this.props.errorMessage){
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  handleFormSubmit(formProps){
    /* Call action creator to sign up the user ! */
    this.props.signupUser(formProps);
  }

  render() {
    const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className="my-4 px-2">
        <div className="form-group row mx-auto pl-4">
          <label className="col-sm-3 text-secondary">Email:</label>
          <input {...email} className="form-control form-control-sm col-sm-6"></input>
        </div>
        <p className="text-danger offset-md-3 pl-4 ">
          <small>
            {email.touched && email.error && <div className="error">{email.error}</div>}
          </small>
        </p>
        <div className="form-group row mx-auto pl-4">
          <label className="col-sm-3 text-secondary">Password:</label>
          <input {...password} type="password" className="form-control form-control-sm col-sm-6"></input>
        </div>
        <p className="text-danger offset-md-3 pl-4">
          <small>
            {password.touched && password.error && <div className="error">{password.error}</div>}
          </small>
        </p>
        <div className="form-group row mx-auto pl-4">
          <label className="col-sm-3 text-secondary">Confirm Password:</label>
          <input {...passwordConfirm} type="password" className="form-control form-control-sm col-sm-6"></input>
        </div>
        <p className="text-danger offset-md-3 pl-4">
          <small>
            {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
          </small>
        </p>
        {this.renderAlert()}
        <div className="col-sm-4 mx-auto">
          <button action="submit" className="btn btn-primary mx-auto btn-sm  btn-block">Sign up</button>
        </div>
      </form>
    )

  }
}

function validate(formProps){
  const errors = {};

  if (!formProps.email){ errors.email = 'Please enter an email';  }
  if (!formProps.password){ errors.password = 'Please enter a password'; }
  if (!formProps.passwordConfirm){ errors.passwordConfirm = 'Please enter a password confirmation'; }
  if (formProps.password !== formProps.passwordConfirm){
      errors.password = 'Passwords must match';
  }
  return errors;
}

function mapStateToProps(state){
  return { errorMessage: state.auth.error };
}

export default reduxForm(
  {
    form: 'signup',
    fields: ['email', 'password', 'passwordConfirm'],
    validate: validate
  },
  mapStateToProps,
  actions
)(Signup);
