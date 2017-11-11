import React, { Component } from 'react';
import './App.css';

import User from './components/User';
import Main from './components/Main';

import { setName } from './actions/userActions';

import {connect} from 'react-redux'

class App extends Component {

  render() {
    return (
      <div className="container">
        <Main changeUserName={() => this.props.setName('Anna')}/>
        <User username={this.props.user.name}/>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    math: state.mathReducer
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
