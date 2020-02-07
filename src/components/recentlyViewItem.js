import React from 'react';
import '../css/recentlyView.css';
import Mark from '../img/icon-mark.svg';

class RecentlyViewItem extends React.Component {
    render() {
        return (
            <div className="recently-view__item">
                <div className="recently-view__item-image">
                    <img class="recently-view__item-image_beach" src={this.props.image} alt="Beach"></img>
                    <img className="recently-view__item-image_mark" src={Mark} alt="Mark"></img>
                </div>
                <div className="recently-view__item-content">
                    <div className="recently-view__item-location">MENORCA, SPAIN</div>
                    <div className="recently-view__item-info">
                        <div className="recently-view__item-info_name">
                            <h3>{this.props.name}</h3>
                            <p>Alcudia &#8226; 2 km</p>
                        </div>
                        <div className="recently-view__item-info_rate">
                            <div className="recently-view__item-info_rate-text">
                                <h3>Excellent</h3>
                                <p>20 reviews</p>
                            </div>
                            <div className="recently-view__item-info_rate-points">8.5</div>
                        </div>
                    </div>
                    <p className="recently-view__item-text">White sand, natural shadow, snorkling</p>
                </div>
            </div>
        )
    }
}

export default RecentlyViewItem;