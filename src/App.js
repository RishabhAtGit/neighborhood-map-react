import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';
import FourSquareAPI from "./FourSquareAPI";

class App extends Component {
  
  state ={
    venues: [],
    markers: []
  }

  componentDidMount(){
    let self = this;
    FourSquareAPI.searchData({
      near: "Bhopal, Madhya Pradesh",
      query:"park",
      limit:8
    }).then(venuesData => {
        //console.log(venuesData.response);
            //retrieving data from response 
        const venuesDetails = venuesData.response.venues;
        //console.log(venuesData.response.venues);
        const markers = venuesDetails.map((venue) => {
          return {
            id:venue.id,
            lat:venue.location.lat,
            lng:venue.location.lng,
            isVisible: true,
            isOpen: false
          };
        });
         // setting data to component state
        self.setState({
          venues:venuesDetails,
          markers: markers,
        });
    });
  }

  //closing all open markers on map whenever a marker is clicked
  closingAllMarkers = () => {
    const markers = this.state.markers.map(marker => {
        marker.isOpen = false;
        return marker;
    });
    this.setState({ markers:Object.assign(this.state.markers, markers) });
  };
   // handling clicks on marker on map
  markerOnClick = marker => {
    this.closingAllMarkers();
    marker.isOpen =true;
    this.setState({markers: Object.assign(this.state.markers, marker) });
  };
  
  render() {
    return (
      <div className="App">
        <Map venues={this.state.venues} markers={this.state.markers} markerOnClick={this.markerOnClick}/>
      </div>
    );
  }
}

export default App;
