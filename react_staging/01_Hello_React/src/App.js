import './App.css';
import Hello from './components/Hello'
import React, {Component} from 'react'
import Welcome from './components/Welcome';

export default class App extends Component {
  render() {
    return (
      <div>
        <Hello/>
        <Welcome/>
      </div>
    )
  }
}
