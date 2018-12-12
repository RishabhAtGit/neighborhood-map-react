import React, { Component } from 'react';
import VenueList from './VenueList';

class SearchArea extends Component {

    state = {
        venues:[],
        query:''
    }
    // function to handle changes in the search field
    handleChangeOnsearchField = (event) => {
        this.props.closeAllMarkers();
        this.setState({ query: event.target.value});
        const markers = this.props.venues.map((venue) =>{
          const result = venue.name.toUpperCase().includes(event.target.value.toUpperCase());
          const respectiveMarker = this.props.markers.find(marker => marker.id === venue.id);
          if(result){
              respectiveMarker.isVisible = true;
          }else{
              respectiveMarker.isVisible = false;
          }
          return respectiveMarker;
        });
        this.props.onUpdatedata({markers});
    };
     // function to filter venues in venues list
      filterLocations= () => {
          if(this.state.query.trim === ""){
              return this.props.venues;
          }else{
              const venues = this.props.venues.filter(venue => venue.name.toLowerCase().includes(this.state.query.toLowerCase()));
              return venues;
          }
      };
    render(){
        return (<div className="search-area">
            <input type="search" role="search" tabIndex={0} placeholder="Search" id="query-field" onChange={this.handleChangeOnsearchField}/>
            <VenueList role="list" {...this.props} itemOnClick ={this.props.itemOnClick} venues={this.filterLocations()} />
        </div>)
    }
}


export default SearchArea;