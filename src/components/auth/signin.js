import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
  handleFormSubmit({ email, password }){

    console.log(email, password);
    this.props.signinUser({email, password});
  }

  renderAlert(){
    if (this.props.errorMessage){
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  render(){
      const { handleSubmit, fields: { email, password } } = this.props;

      return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className="my-4">
        <div className="form-group row mx-auto pl-4">
          <label className="col-sm-2 text-secondary">Email:</label>
          <input {...email} className="form-control form-control-sm col-sm-8"></input>
        </div>
        <div className="form-group row mx-auto pl-4">
          <label className="col-sm-2 text-secondary">Password:</label>
          <input {...password} type="password" className="form-control form-control-sm col-sm-8"></input>
        </div>
        {this.renderAlert()}
        <div className="col-sm-4 mx-auto">
          <button action="submit" className="btn btn-primary mx-auto btn-sm  btn-block">Sign in</button>
        </div>
      </form>
  ); }
}

function mapStateToProps(state){
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);
