import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';

const rootReducer = combineReducers({
  form: form,
  auth: authReducer
  /* form: form can also be written as { form } */
});

export default rootReducer;
