import React, { useState } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";

import "./App.scss";

import All from './Views/All/All.jsx';
import Done from './Views/Done/Done.jsx';
import Todo from './Views/Todo/Todo.jsx';

const AppUI = (props) => {
  const [ something, setSomething ] = useState('');
  
  const addList = (e) => {
    let content = e ? e.target.value : something;
    props.ADD_LIST(content);
    setSomething("");
  }
  
  const handleKeyDown = (e) => {
    e.keyCode === 13 && something.trim() && addList(e);
  }
  
  const handleChange = (e) => {
    setSomething(e.target.value);
  }
  
  const handleClick = () => {
    something.trim() && addList();
  }
  
  return (
    <div className="app">
      <div className="input">
        <input 
          type="text" 
          placeholder="请输入需要记录的事情！"
          value = { something }
          onChange = { (e) => handleChange(e) }
          onKeyDown = { (e) => handleKeyDown(e) }
        />
        <button onClick={ handleClick }>确认</button>
      </div>
      <Router>
        <div className="nav">
          <NavLink to="/all">All</NavLink>
          <NavLink to="/todo">Todo</NavLink>
          <NavLink to="/done">Done</NavLink>
        </div>
        <div className="list">
          <Switch>
            <Route path="/all" component={ All } />
            <Route path="/todo" component={ Todo } />
            <Route path="/done" component={ Done } />
            <Redirect from="/*" to="/all" />
          </Switch>
        </div>
      </Router>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    ADD_LIST: content => dispatch({ type: "ADD_LIST", payload: content }) 
  }
}
 
const App = connect( mapStateToProps, mapDispatchToProps )( AppUI );

export default App;