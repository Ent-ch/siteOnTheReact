import React from 'react';
import '../css/mainSearch.css'

class MainSearch extends React.Component {
    handleSearchClick(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="main-search">
                <h2 className="main-search__header">Find your<br></br>perfect beach</h2>
                <p className="main-search__text">in <span>mediterranean</span> region</p>
                <form className="main-search__form">
                    <input type="text" placeholder="Location or beach name"></input>
                    <button onClick={this.handleSearchClick}>Search</button>
                </form>
            </div>
        )
    }
}

export default MainSearch;