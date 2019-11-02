import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import BrandList from './components/BrandList/BrandList.jsx'
import CustomNavBar from './components/CustomNavbar/CustomNavbar.jsx';
import SearchBar from './components/SearchBar/SearchBar';
import LineGraph from './components/LineGraph/LineGraph.jsx';
import LineAreaGraph from './components/LineAreaGraph/LineAreaGraph.jsx';
import ClimateData from './components/ClimateData/ClimateData.jsx';

function App() {
  return (
        <>
            <Router>
                <Container>
                    <Row>
                        <Col>
                            <CustomNavBar></CustomNavBar>
                        </Col>
                    </Row>
                </Container>
                <Switch>
                    <Route path='/' exact component={SearchBar}>
                        <Container>
                            <SearchBar></SearchBar>
                        </Container>
                    </Route>
                    <Route path='/climatedata' exact component={LineAreaGraph}>
                        <Container>
                            <ClimateData></ClimateData>
                        </Container>
                    </Route>
                    <Route path='/brands'>
                        <h1>Brands</h1>
                        <BrandList/>
                    </Route>
                </Switch>
            </Router>
        </>
  );
}

export default App;
