import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes, 
  Route,
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/general" element={<News pageSize={9} country="in" category="general"/>}></Route>
        </Routes>
        
        </Router>
      </div>
    )
  }
}
