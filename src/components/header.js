/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import DropdownMenu from './dropdownMenu';
import '../css/header.css';
import Logo from '../img/bs_logo_fff.png';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <a href="#" className="header__logo">
                    <img className="header__logo-img" src={Logo} alt="logo"></img>
                    <h1 className="header__logo-text">BeachSearcher<sup>Beta</sup></h1>
                </a>

                <div className="header__navigation">
                    <a href="#" className="header__navigation-link">Beaches</a>
                    <a href="#" className="header__navigation-link">Hotels</a>
                </div>

                <div className="header__dropdown-menu">
                    < DropdownMenu value="English" iconName="lang"></DropdownMenu>
                    < DropdownMenu value="Add review" iconName="pen"></DropdownMenu>
                    < DropdownMenu value="Sign in" iconName="user"></DropdownMenu>

                </div>
            </header>
        )
    }
}

export default Header;
