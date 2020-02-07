/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../css/footer.css';
import Logo from '../img/bs_logo-gr2.png';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footer__container">
                    <div className="footer__content">
                        <img className="footer__content-logo" src={Logo} alt="logo"></img>
                        <p className="footer__content-info">© 2020 BeachSearcher.com, Inc. All rights reserved</p>
                    </div>
                    <div className="footer__navigation">
                        <a className="footer__navigation-link" href="#">Terms</a>
                        <a className="footer__navigation-link" href="#">Privacy</a>
                        <a className="footer__navigation-link" href="#">Site Map</a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;