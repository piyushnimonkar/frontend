import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import "./App.css";
import Sign from "./Sign/Sign";
import Main from "./MainPage/Main";
class App extends Component {
  render() {
    return (
      <Router exact path="/">
        <div className="App">
          <div className="App__Aside" />
          <Route exact path="/" component={Sign} />
          <Route path="/main" component={Main} />
        </div>
      </Router>
    );
  }
}

export default App;
