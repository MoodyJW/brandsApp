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

import CustomNavBar from './components/CustomNavbar';
import CompanyGrid from './components/CompanyGrid';
import SearchBar from './components/SearchBar';
import CompanyList from './components/CompanyList';


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
                    <Route path='/companies' exact component={CompanyGrid}>
                        <Container>
                            <Row>
                                <Col>
                                    <CompanyGrid></CompanyGrid>
                                </Col>
                            </Row>
                        </Container>
                    </Route>
                    <Route path='/about'>
                        <CompanyList></CompanyList>
                    </Route>
                </Switch>
            </Router>
        </>
  );
}

export default App;
