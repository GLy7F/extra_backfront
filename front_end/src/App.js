import React, { Component } from 'react'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import NaveBar from './components/NaveBar/NaveBar.js';
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LondingPage from './components/container/LondingPage'
import Login from './components/container/Login'
import Register from './components/container/Register'
import Profile from './components/container/Profile'


class App extends Component {
  render() {
   
    
    return (
      <Router>
        <div className="App">
          {/* <Navbar /> */}
          <NaveBar />
         
          <Route exact path="/" component={LondingPage} />
          <Container className="main" >
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            </Container>
          
        </div>
      </Router>
    )
  }
}
export default App
