import React from 'react';
import '../css/dropdownMenu.css';
import iconLang from '../img/icon-lang.svg';
import iconPen from '../img/icon-pen.svg';
import iconUser from '../img/icon-user.svg';
import iconArrow from '../img/icon-arrow-down.svg';

class DropdownMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayMenu: false,
        }

        this.icons = {
            lang: iconLang,
            pen: iconPen,
            user: iconUser,
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    }

    showDropdownMenu(e) {
        e.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });
    }

    render() {
        return (
            <div className="dropdown-menu">
                <div className="dropdown-menu_button" onClick={this.showDropdownMenu}>
                    <img className={`dropdown-menu_icon-${this.props.iconName}`} src={this.icons[this.props.iconName]} alt={`icon ${this.props.value}`}></img>
                    <p className="dropdown-menu_button-text">{this.props.value}</p>
                    <img src={iconArrow} alt="arrow down icon"></img>
                </div>
                { this.state.displayMenu ? (
                    <ul className="dropdown-menu_list">
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                ) : (null)
                }

            </div>
        )
    }
}

export default DropdownMenu;