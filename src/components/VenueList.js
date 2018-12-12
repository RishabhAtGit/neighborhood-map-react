//imports

import React from 'react';
import VenueItem from './VenueItem';


class VenueList extends React.Component {
    // function to render venue list (un-ordered list) 
    render(){
        return (
            <ol className="venue-list" role="ListBox">
            {this.props.venues && this.props.venues.map((venue) => <VenueItem key={venue.id} {...venue} itemOnClick={this.props.itemOnClick}/>)}
            </ol>
        )
    }
}

export default VenueList;