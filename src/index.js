import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Signin from './components/auth/signin';
import reducers from './reducers';

/*const createStoreWithMiddleware = applyMiddleware()(createStore);*/

const store = createStore(reducers, composeWithDevTools(applyMiddleware(reduxThunk)));


ReactDOM.render(
  /* <Provider store={createStoreWithMiddleware(reducers)}> */
  <Provider store={store} >
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="signin" component={Signin}/>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
