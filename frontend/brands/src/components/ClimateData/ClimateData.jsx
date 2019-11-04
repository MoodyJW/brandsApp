import React , { Component } from 'react';
import LineGraph from '../LineGraph/LineGraph.jsx';
import LineAreaGraph from '../LineAreaGraph/LineAreaGraph.jsx';
import DoughnutGraph from '../DoughnutGraph/DoughnutGraph.jsx';

import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const containerStyle = {
    border: '1px solid',
    maxWidth: '95%',
}

export default class ClimateData extends Component {
    render() {
        return (
            <Container style={containerStyle} fluid>
                <Tabs defaultActiveKey="comparisons" id="comparisons-tab" mountOnEnter={true}>
                    <Tab eventKey="comparisons" title="Comparisons">
                        <LineGraph></LineGraph>
                    </Tab>
                    <Tab eventKey="coca-cola" title="Coca-Cola">
                        <LineAreaGraph  style={{width: "100%"}}></LineAreaGraph>
                    </Tab>  
                    <Tab eventKey="etc" title="Etc">
                        <DoughnutGraph></DoughnutGraph>
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}