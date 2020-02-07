import React from 'react';

class PopularDestinationsItem extends React.Component {
    render() {
        return (
            <div className="popular-destinations__item">
                <img className="popular-destinations__item-img" src={this.props.image} alt={`destination ${this.props.location}`}></img>
                <h3 className="popular-destinations__item-location">{this.props.location}</h3>
                <h6 className="popular-destinations__item__beaches-count">{this.props.beachesCount} beaches</h6>
                <p className="popular-destinations__item-description">{this.props.description}</p>
            </div>
        )
    }
}

export default PopularDestinationsItem;
