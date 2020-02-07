import React from 'react';
import Header from './header';
import MainSearch from './mainSearch';
import QuickReview from './quickReview';
import RecentlyView from './recentlyView';
import '../css/headerSection.css';

class HeaderSection extends React.Component {
    render() {
        return (
            <section className="header-section">
                <div className="header-section__bg">
                    < Header />
                    < MainSearch />
                    <div className="header-section__footer">
                        < QuickReview />
                        < RecentlyView />
                    </div>
                </div>
            </section>
        )
    }
}

export default HeaderSection;