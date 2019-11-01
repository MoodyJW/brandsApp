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
import CustomNavBar from './components/CustomNavbar/CustomNavbar';
import SearchBar from './components/SearchBar/SearchBar';
import ClimateDataTable from './components/Table/ClimateDataTable.jsx';
import LineGraph2 from './components/LineGraph/LineGraph2.jsx';
import Data from './components/LineGraph/Data.jsx';

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
                    <Route path='/climatetable' exact component={ClimateDataTable}>
                        {/* <Container>
                            <ClimateDataTable></ClimateDataTable>
                        </Container>
                        <Data></Data> */}
                        <LineGraph2></LineGraph2>
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
