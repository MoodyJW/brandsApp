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

<<<<<<< HEAD
import CustomNavBar from './components/CustomNavbar';
import CompanyGrid from './components/CompanyGrid';
import SearchBar from './components/SearchBar';
import CompanyList from './components/CompanyList/CompanyList';
import BrandList from './components/BrandList/BrandList.jsx'
=======
import CustomNavBar from './components/CustomNavbar/CustomNavbar';
import CompanyGrid from './components/Company/CompanyGrid';
import SearchBar from './components/SearchBar/SearchBar';
import LoginForm from './components/Authentication/LoginForm.jsx';
import NewUserForm from './components/Authentication/NewUserForm.jsx';

// import CompanyList from './components/Company/CompanyList';
// import BrandList from './components/BrandList/BrandList.jsx'
>>>>>>> b675715c0a2ebfb2d3521bc15a84c4dca10b8186


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
<<<<<<< HEAD
                    <Route path='/brands'>
                        <h1>Brands</h1>
                        <BrandList/>
=======
                    <Route path='/about'>
                        <Container>
                            {/* <CompanyList></CompanyList>
                            <BrandList></BrandList> */}
                            {/* <LoginForm></LoginForm> */}
                            <NewUserForm></NewUserForm>
                        </Container>
>>>>>>> b675715c0a2ebfb2d3521bc15a84c4dca10b8186
                    </Route>
                </Switch>
            </Router>
        </>
  );
}

export default App;
