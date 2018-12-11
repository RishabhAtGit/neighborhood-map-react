import React, {Component} from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

// for rendering map on screen
const MapRenderingComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat:23.259065628051758, lng: 77.40178680419922}}>
        {props.markers && props.markers.filter(marker => marker.isVisible === true).map((marker,index) =>(
            <Marker key= {index} position={{lat:marker.lat, lng: marker.lng}}/> ))}    {/* added marker for venues */}
    </GoogleMap>
))

class Map extends Component {
    render(){
        return(
            <MapRenderingComponent
                {...this.props}
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDvjTy2Hva-KrhH-Vqeu6s3arpuckvVlWk"
                loadingElement={<div style={{ height:`100%`}}/>}
                containerElement={<div style={{ height:`700px`}}/>}
                mapElement={<div style={{height: `100%`}}/>} />
        )
    }
}

export default Map;
