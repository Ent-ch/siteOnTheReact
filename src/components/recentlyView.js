import React from 'react';
import RecentlyViewItem from './recentlyViewItem';
import ItemsCarousel from 'react-items-carousel';
import '../css/recentlyView.css';
import IconArrowRight from '../img/icon-arrow-right.svg';

import Beach from '../img/beach.png';
import Beach2 from '../img/beach2.png';
import Beach3 from '../img/beach3.png';

class RecentlyView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItemIndex: 0,
        };
    }

    render() {
        return (
            <div className="recently-view">
                <h3 className="recently-view__header">You recently viewed</h3>

                <ItemsCarousel
                    infiniteLoop={false}
                    gutter={12}
                    activePosition={'center'}
                    chevronWidth={60}
                    disableSwipe={false}
                    alwaysShowChevrons={false}
                    numberOfCards={3}
                    slidesToScroll={1}
                    outsideChevron={false}
                    showSlither={false}
                    firstAndLastGutter={false}
                    activeItemIndex={this.state.activeItemIndex}
                    requestToChangeActive={value => this.setState({ activeItemIndex: value })}
                    rightChevron={<img src={IconArrowRight} alt="icon arrow right"></img>}
                    leftChevron={<img src={IconArrowRight} alt="icon arrow right"></img>}
                >
                    <RecentlyViewItem name="Cala Mitjaha" image={Beach}/>
                    <RecentlyViewItem name="Cala de Trebalucher" image={Beach2}/>
                    <RecentlyViewItem name="Cala Galdana" image={Beach3}/>
                    <RecentlyViewItem name="Cala Mitjaha" image={Beach}/>
                    <RecentlyViewItem name="Cala de Trebalucher" image={Beach2}/>
                    <RecentlyViewItem name="Cala Galdana" image={Beach3}/>
                </ItemsCarousel>
            </div>
        )
    }
}

export default RecentlyView;