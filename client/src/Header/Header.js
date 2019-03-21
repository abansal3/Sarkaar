import React, {Component} from 'react';
import './Header.scss';
import ReactGA from 'react-ga';
import { NavLink } from 'react-router-dom'

import SelectBox from '../shared/SelectBox/SelectBox';

class Header extends Component {
    constructor(props) {
        super(props);

        this.handleTopicSelect = this.handleTopicSelect.bind(this);
        this.handleLocationSelect = this.handleLocationSelect.bind(this);
    }

    handleTopicSelect(selectedOption) {
        console.log("Topic selected:", selectedOption.label)
        ReactGA.event({
            category: 'Topic',
            action: 'Topic Selected',
            label: selectedOption.label
        });
    }

    handleLocationSelect(selectedOption) {
        console.log("Location selected:", selectedOption.label)
        ReactGA.event({
            category: 'Location',
            action: 'Location Selected',
            label: selectedOption.label
        });
    }
    
    render () {
        return (
            <nav style={{ position: this.props.position }}>
                <div className="container">
                    <NavLink to="/" className="left" onClick={() => window.scrollTo(0, 0)}>
                        <img id="logo" src='/img/Logo.svg' alt="Logo" />
                    </NavLink>
                    <div className="middle">
                        <SelectBox 
                        options={[
                            { value: 'government-structure', label: 'Government Structure' },
                            { value: 'election-cycle', label: 'Election Cycle' },
                            { value: 'political-parties', label: 'Political Parties' },
                            { value: 'macro-trends', label: 'Macro Trends' }
                        ]}
                        width= '200px'
                        placeholder="Pick Your Topic"
                        selectedOption={this.handleTopicSelect}
                        />
                        <img id="left-right" src="/img/left_right_arrow.svg" alt="Divider" />
                        <SelectBox 
                        options={[
                            {value: "AN", label: "Andaman and Nicobar Islands"},
                            {value: "AP", label: "Andhra Pradesh"},
                            {value: "AR", label: "Arunachal Pradesh"},
                            {value: "AS", label: "Assam"},
                            {value: "BR", label: "Bihar"},
                            {value: "CG", label: "Chandigarh"},
                            {value: "CH", label: "Chhattisgarh"},
                            {value: "DH", label: "Dadra and Nagar Haveli"},
                            {value: "DD", label: "Daman and Diu"},
                            {value: "DL", label: "Delhi"},
                            {value: "GA", label: "Goa"},
                            {value: "GJ", label: "Gujarat"},
                            {value: "HR", label: "Haryana"},
                            {value: "HP", label: "Himachal Pradesh"},
                            {value: "JK", label: "Jammu and Kashmir"},
                            {value: "JH", label: "Jharkhand"},
                            {value: "KA", label: "Karnataka"},
                            {value: "KL", label: "Kerala"},
                            {value: "LD", label: "Lakshadweep"},
                            {value: "MP", label: "Madhya Pradesh"},
                            {value: "MH", label: "Maharashtra"},
                            {value: "MN", label: "Manipur"},
                            {value: "ML", label: "Meghalaya"},
                            {value: "MZ", label: "Mizoram"},
                            {value: "NL", label: "Nagaland"},
                            {value: "OR", label: "Odisha"},
                            {value: "PY", label: "Puducherry"},
                            {value: "PB", label: "Punjab"},
                            {value: "RJ", label: "Rajasthan"},
                            {value: "SK", label: "Sikkim"},
                            {value: "TN", label: "Tamil Nadu"},
                            {value: "TS", label: "Telangana"},
                            {value: "TR", label: "Tripura"},
                            {value: "UK", label: "Uttarakhand"},
                            {value: "UP", label: "Uttar Pradesh"},
                            {value: "WB", label: "West Bengal"}
                        ]}
                        isClearable
                        isSearchable
                        width= '200px'
                        placeholder="Location" 
                        selectedOption={this.handleLocationSelect}
                        />
                    </div>
                    <div className="right">
                        <SelectBox 
                        options={[
                            { value: 'EN', label: 'English' }
                        ]}
                        isSearchable
                        width= '130px'
                        placeholder="Languages"
                        />
                        <img id="search" src="/img/search.svg" alt="Search" />
                        <img id="menu" src="/img/menu.svg" alt="Menu" />
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;