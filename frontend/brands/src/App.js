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

import CustomNavBar from './components/CustomNavbar/CustomNavbar';
import SearchBar from './components/SearchBar/SearchBar';
import ClimateDataTable from './components/Table/ClimateDataTable.jsx';

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
                        <Container>
                            <ClimateDataTable></ClimateDataTable>
                        </Container>
                    </Route>
                    <Route path='/about'>
                        <Container>
                            <p className='text-center'><b>Stuff and things</b></p>
                        </Container>
                    </Route>
                </Switch>
            </Router>
        </>
  );
}

export default App;
