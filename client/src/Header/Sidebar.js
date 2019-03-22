import React, {Component} from 'react';
import './Sidebar.scss';
import ReactGA from 'react-ga';
import { NavLink } from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu';

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }
    
    render () {
        return (
            <Menu right isOpen={this.props.isMenuOpen} onStateChange={this.props.stateChange} customBurgerIcon={ false } customCrossIcon={ <img src="/img/x.svg" /> }>
                <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
                    Home
                </NavLink>
            </Menu>
        )
    }
}

export default Sidebar;