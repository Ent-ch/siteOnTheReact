import React from 'react';

class PopularFiltersItem extends React.Component {
    render() {
        return (
            <div className="popular-filters__item">
                <img src={this.props.image} alt="filter"/>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default PopularFiltersItem;