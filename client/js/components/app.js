import React, { Component } from 'react';
import Login from './login/login';
import Home from './home/home';

class App extends Component {
  checkCookie() {
    return document.cookie.includes('sessionToken=true');
  }
  render() {
    return this.checkCookie() ? <Home/> : <Login/>
  }
}

export default App;