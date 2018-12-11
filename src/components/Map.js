import React, {Component} from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapRenderingComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat:23.259065628051758, lng: 77.40178680419922}}>
        {props.isMarkerShown && <Marker postion={{lat:23.259065628051758, lng: 77.4017868041992}}/>}    
    </GoogleMap>
))

class Map extends Component {
    render(){
        return(
            <MapRenderingComponent
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDvjTy2Hva-KrhH-Vqeu6s3arpuckvVlWk"
                loadingElement={<div style={{ height:`100%`}}/>}
                containerElement={<div style={{ height:`700px`}}/>}
                mapElement={<div style={{height: `100%`}}/>} />
        )
    }
}

export default Map;
