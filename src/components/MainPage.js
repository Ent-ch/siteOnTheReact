import React from 'react';
import HeaderSection from './headerSection';
import MainSection from './mainSection';
import Footer from './footer';

class MainPage extends React.Component {
    render() {
        return (
            <div>
                < HeaderSection />
                < MainSection />
                < Footer />
            </div>
        )
    }
}

export default MainPage;
