import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import Home from './Home';
import Layout from '../containers/Layout'

const Routes = () => {
  return (
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <Route path="/home" component={Home}/>
        </Route>
    </Router>
  )
};

export default connect(null)(Routes);