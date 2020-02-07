import React from 'react';
import PopularFilters from './popularFilters';
import PopularDestinations from './popularDestinations';
import '../css/mainSection.css';

class MainSection extends React.Component {
    render() {
        return (
            <section className="main-section">
                < PopularFilters />
                < PopularDestinations />
            </section>
        )
    }
}

export default MainSection;