import React from 'react';
import PopularFiltersItem from './popularFiltersItem';
import '../css/popularFilters.css';
import filterKidsfri from '../img/filter-kidsfri.png';
import filterRelax from '../img/filter-relax.png';
import filterSandWater from '../img/filter-sandwater.png';
import filterShadow from '../img/filter-shadow.png';
import filterSports from '../img/filter-sports.png';

class PopularFilters extends React.Component {
    render() {
        return (
            <div className="popular-filters">
                <h2 className="popular-filters__header">Popular filters</h2>
                <p className="popular-filters__description">find most inspirable beach options</p>
                <div className="popular-filters__content">
                    < PopularFiltersItem name="White sand & crystal water" image={filterSandWater}/>
                    < PopularFiltersItem name="Kids-friendly" image={filterKidsfri}/>
                    < PopularFiltersItem name="Relax" image={filterRelax}/>
                    < PopularFiltersItem name="Natural shadow" image={filterShadow}/>
                    < PopularFiltersItem name="Watersports" image={filterSports}/>
                    < PopularFiltersItem name="Natural shadow" image={filterShadow}/>
                    < PopularFiltersItem name="White sand & crystal water" image={filterSandWater}/>
                    < PopularFiltersItem name="Kids-friendly" image={filterKidsfri}/>
                </div>
            </div>
        )
    }
}

export default PopularFilters;