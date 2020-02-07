import React from 'react';
import '../css/quickReview.css';
import iconCamera from '../img/icon-camera.svg';
import iconPen from '../img/icon-pen-blue.svg';

class QuickReview extends React.Component {
    render() {
        return (
            <div className="quick-review">
                <div className="quick-review__content">
                    <h3 className="quick-review__header">
                        Share your experience<br/> with all beach lovers!
                    </h3>
                    <div className="quick-review__button">
                        <img src={iconCamera} alt="instagram" /> <p>Publish a photo</p>
                    </div>
                    <div className="quick-review__button">
                        <img src={iconPen} alt="pen" /> <p>Add a review</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuickReview;
