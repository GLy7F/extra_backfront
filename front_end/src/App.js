import React, { Component } from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import NaveBar from './components/NaveBar/NaveBar'


export default class App extends Component {
  render() {
    return (
      <div>
        <NaveBar/>
      </div>
    )
  }
}
