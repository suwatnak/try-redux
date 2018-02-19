import React, { Component } from 'react';
import {connect} from 'react-redux'
import User from './User'
class App extends Component {
  render() {
    return (
    <div>
      <User username={this.props.user.name}/>
      <button onClick={()=>this.props.setName("Redux hi")}>ChangeName</button>
    </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    user: state.user,
    emp: state.emp
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    setName:(name) => {
      dispatch({
        type: "setName",
        payload: name
      })
    }
  }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(App);
