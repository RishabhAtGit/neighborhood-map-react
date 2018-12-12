//imports
import React, { Component } from 'react';

class VenueItem extends Component {
    
    //function rendering venue items
    render(){
        return (<li tabIndex={0}  aria-labelledby="venue-item" key={this.props.id} className="venue-item" onClick={() => this.props.itemOnClick(this.props) }>{this.props.name} </li>)
        
    }
}


export default VenueItem;