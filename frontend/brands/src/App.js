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
import CompanyGrid from './components/Company/CompanyGrid';
import SearchBar from './components/SearchBar/SearchBar';

// import LoginForm from './components/Authentication/LoginForm.jsx';
// import NewUserForm from './components/Authentication/NewUserForm.jsx';
// import CompanyList from './components/Company/CompanyList';
// import BrandList from './components/BrandList/BrandList.jsx'


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
                        <Container>
                            {/* <CompanyList></CompanyList>
                            <BrandList></BrandList> */}
                        </Container>
                    </Route>
                </Switch>
            </Router>
        </>
  );
}

export default App;
