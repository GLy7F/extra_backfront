import React, { Component } from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import NaveBar from './components/NaveBar/NaveBar'
import {Container} from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LondingPage from './components/container/LondingPage'
import  login  from './components/container/Login';
import  Register  from './components/container/Register';
import Profile  from './components/container/Profile';





export default class App extends Component {
  render() {
    return (
                   <Router>

      <div>
        <NaveBar/>
   
            <Container className="main">
<Switch>
  <Route path='/' Component={LondingPage} />
  <Route path='/login' Component={login} />
  <Route path='/register' Component={Register} />
  <Route path='/profile' Component={Profile} />
     </Switch> 
        </Container>   
    
   


      </div>
             </Router>

    )
  }
}
