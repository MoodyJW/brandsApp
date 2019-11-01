import React, { Component } from 'react';

import SearchBar from './SearchBar.jsx';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


export default class TabMenu extends Component {
    render() {
        return (
            <Tabs defaultActiveKey="companies" id="search-tab">
                <Tab eventKey="companies" title="Companies">
                    
                </Tab>
                <Tab eventKey="brands" title="Brands">
                    
                </Tab>
                <Tab eventKey="legislators" title="Legislators">

                </Tab>
            </Tabs>
        )
    }
}