import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
} from "react-router-dom";


export default class App extends Component {
  pageSize=9;
  apiKey="ed368439ccef49609ae709e6d14d17cc"
  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <LoadingBar
            color='#f11946'
            height={4}
            progress={this.state.progress}
           
          />
          <Routes>
            <Route exact path="/general" element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="general"/>}></Route>
            <Route exact path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business"/>}></Route>
            <Route exact path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}></Route>
            <Route exact path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="healths" pageSize={this.pageSize} country="in" category="health"/>}></Route>
            <Route exact path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science"/>}></Route>
            <Route exact path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports"/>}></Route>
            <Route exact path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology"/>}></Route>
          </Routes>
        
        </Router>
      </div>
    )
  }
}
