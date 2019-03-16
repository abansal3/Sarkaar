import React, {Component} from 'react';
import './Header.scss';

import SelectBox from '../shared/SelectBox/SelectBox';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    
    render () {
        return (
            <nav style={{ position: this.props.position }}>
                <div className="container">
                    <div className="left">
                        <img id="logo" src='/img/Logo.svg' alt="Logo" />
                    </div>
                    <div className="middle">
                        <SelectBox 
                        options={[
                            { value: 'chocolate', label: 'Chocolate' },
                            { value: 'strawberry', label: 'Strawberry' },
                            { value: 'vanilla', label: 'Vanilla' }
                        ]}
                        width= '200px'
                        placeholder="Pick Your Topic" />
                        <img id="left-right" src="/img/left_right_arrow.svg" alt="Divider" />
                        <SelectBox 
                        options={[
                            { value: 'chocolate', label: 'Chocolate' },
                            { value: 'strawberry', label: 'Strawberry' },
                            { value: 'vanilla', label: 'Vanilla' }
                        ]}
                        width= '200px'
                        placeholder="State" />
                    </div>
                    <div className="right">
                        <SelectBox 
                        options={[
                            { value: 'chocolate', label: 'Chocolate' },
                            { value: 'strawberry', label: 'Strawberry' },
                            { value: 'vanilla', label: 'Vanilla' }
                        ]}
                        width= '130px'
                        placeholder="Languages" />
                        <img id="search" src="/img/search.svg" alt="Search" />
                        <img id="menu" src="/img/menu.svg" alt="Menu" />
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;