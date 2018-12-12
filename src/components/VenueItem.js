import React, { Component } from 'react';

class VenueItem extends Component {

    render(){
        return (<li tabIndex={0} role={"Listitem"} aria-labelledby="venue-item" key={this.props.id} className="venue-item" onClick={() => this.props.itemOnClick(this.props) }>{this.props.name} </li>)
        
    }
}


export default VenueItem;