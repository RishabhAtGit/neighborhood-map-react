import React, { Component } from 'react';

class VenueItem extends Component {

    render(){
        return <li className="venue-item" onClick={() => this.props.itemOnClick(this.props) }>{this.props.name} </li>
        
    }
}


export default VenueItem;