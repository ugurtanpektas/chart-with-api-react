import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {userAction} from './actions/userAction';

import Login from "./components/Login";
import Home from "./components/Home";
import Hourly from "./components/Hourly";
import PrivateRoute from "./components/PrivateRoute"

class App extends React.Component{

  componentDidMount(){

  }

  render(){
     return (
      <Router>
      <div className="App">      
        <Route path='/login' component={Login} />
        <PrivateRoute authed={this.props.userState.isLoggedIn} exact path='/' component={Home} />
        <PrivateRoute authed={this.props.userState.isLoggedIn} exact path='/hourly' component={Hourly} />
      </div>
      </Router>
      )
  }
}

function mapStateToProps(state){
  return{
      userState: state.users
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
      userAction : userAction
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (App);