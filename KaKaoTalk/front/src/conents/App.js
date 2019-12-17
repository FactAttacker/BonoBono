import React, { PureComponent } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class App extends PureComponent {
  render(){
    return (
      <div className = "App" />
    );
  }
}

const mapToDispatch = (dispatch) =>({
    test: () => dispatch(actions.TestFun())
});

export default connect(null, mapToDispatch)(App);
