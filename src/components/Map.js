/* global google */
import React, {Component} from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

// for rendering map on screen
const MapRenderingComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat:23.259065628051758, lng: 77.40178680419922}}>
        {props.markers && props.markers.filter(marker => marker.isVisible === true).map((marker) =>{
           const venueDetail = props.venues.find(venue => venue.id === marker.id);
           return  (
            <Marker key= {marker.id} position={{lat:marker.lat, lng: marker.lng}}  onClick={() => props.markerOnClick(marker)}
             animation ={ marker.isOpen ? google.maps.Animation.BOUNCE : google.maps.Animation.DROP} >
              
               
                {marker.isOpen  && (
                    <InfoWindow onCloseClick={() => props.closeAllMarkers()}>
                        <div>    
                            <p>{venueDetail.name.toUpperCase()}</p>
                            <p>Latitude: {venueDetail.location.lat}</p>
                            <p>Longitude: {venueDetail.location.lng}</p>
                        </div>
                        
                    </InfoWindow>
                )}
            </Marker> )})}    {/* added marker for venues */}
    </GoogleMap>
))

class Map extends Component {
    render(){
        return(
            <MapRenderingComponent
                {...this.props}
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDvjTy2Hva-KrhH-Vqeu6s3arpuckvVlWk"
                loadingElement={<div style={{ height:`100%`}}/>}
                containerElement={<div style={{ width:`100%`,height:`100%`}}/>}
                mapElement={<div style={{height: `100%`}}/>} />
        )
    }
}

export default Map;
