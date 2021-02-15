import React, { Component } from 'react';
import './App.css';
import Body from './Body';
import Header from './Header';
import Tag from './Tag';
import axios from 'axios';

class App extends Component{
  state = {
    data: [],
  }

  componentDidMount(){
    this.catData();
  }

  catData = async () => {
      const url = 'https://api.thecatapi.com/v1/breeds'
      try{
          const response = await axios.get(url);
          const catdata = await response.data;
          this.setState({
              data: catdata,
          })
          console.log('Array is: ')
          console.log(this.state.data)
      } catch(error){
          console.log(error)
      }
  }

  render(){

    return(
      <div className="app">
        <Header />
        <div className="app_divider">
          <Body data={ this.state.data } />
          <Tag data={ this.state.data } /> 
        </div>
      </div>
    )
  }
}

export default App;
