import React, { Component } from 'react';
import {connect} from 'react-redux'
import User from './User'
class App extends Component {
  render() {
    return (
    <div>
      <User username={this.props.user.name}/>
      <h1>{this.props.emp.result}</h1>
      <button onClick={()=>this.props.setName("Redux hi")}>ChangeName</button>
      <button onClick={()=>this.props.add(5000)}>Add</button>
      
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
    },
    add:(value) => {
      dispatch({
        type: "ADD",
        payload: value
      })
    }
  }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(App);
