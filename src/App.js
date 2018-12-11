import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';
import FourSquareAPI from "./FourSquareAPI";

class App extends Component {
  componentDidMount(){
    FourSquareAPI.searchData({
      near: "Bhopal, Madhya Pradesh",
      query:"park",
      limit:8
    }).then(response => console.log(response));
  }
  render() {
    return (
      <div className="App">
        <Map/>
      </div>
    );
  }
}

export default App;
