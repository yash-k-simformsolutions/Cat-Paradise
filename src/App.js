import React, { Component } from 'react';
import './App.css';
import Body from './Body';
import Header from './Header';
import Tag from './Tag';

class App extends Component{
  render(){
    return(
      <div className="app">
        <Header />
        <div className="app_divider">
          <Body />
          <Tag /> 
        </div>
      </div>
    )
  }
}

export default App;
