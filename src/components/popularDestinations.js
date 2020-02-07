import React from 'react';
import PopularDestinationsItem from './popularDestinationsItem';
import '../css/popularDestinations.css';
import regionLefkas from '../img/region-lefkas.png';
import regionMallorca from '../img/region-mallorca.png';
import regionMenorca from '../img/region-menorca.png';

class PopularDestinations extends React.Component {
    render() {
        return (
            <div className="popular-destinations">
                <h2 className="popular-destinations__header">Popular destinations</h2>
                <p className="popular-destinations__description">view most preferred destinations</p>
                <div className="popular-destinations__container">
                    <div className="popular-destinations__content">
                        < PopularDestinationsItem location="Majorca, Spain" beachesCount="280" image={regionMallorca}
                            description="Wild small bays with you and nature"/>
                        < PopularDestinationsItem location="Lefkas, Greece" beachesCount="150" image={regionLefkas}
                            description="Crystal water and child friendly beaches"/>
                        < PopularDestinationsItem location="Menorca, Spain" beachesCount="280" image={regionMenorca}
                            description="Wild small bays with you and nature"/>
                        < PopularDestinationsItem location="Sardinia, Italy" beachesCount="150" image={regionLefkas}
                            description="Crystal water and child friendly beaches"/>
                        < PopularDestinationsItem location="Majorca, Spain" beachesCount="280" image={regionMallorca}
                            description="Wild small bays with you and nature"/>
                        < PopularDestinationsItem location="Lefkas, Greece" beachesCount="150" image={regionLefkas}
                            description="Crystal water and child friendly beaches"/>
                        < PopularDestinationsItem location="Menorca, Spain" beachesCount="280" image={regionMenorca}
                            description="Wild small bays with you and nature"/>
                        < PopularDestinationsItem location="Sardinia, Italy" beachesCount="150" image={regionLefkas}
                            description="Crystal water and child friendly beaches"/>
                    </div>
                    <div className="popular-destinations__ad-block">
                        <h3>Ad block</h3>
                    </div>
                </div>
                <div className="popular-destinations__button">Show all popular destinations</div>
            </div>
        )
    }
}

export default PopularDestinations;