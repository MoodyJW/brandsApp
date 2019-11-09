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
import Image from "react-bootstrap/Image";
import './App.css'
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
                    <Route path='/' exact>                  
                        <div className="main_container">
                            
                            <Container>
                            <Image src={require('./bg1.jpg')} fluid />
                                <SearchBar></SearchBar>
                            </Container>
                        </div>
                    </Route>
                     
                    <Route path='/climatedata' exact component={ClimateData}/>
                    <Route path='/brands' exact component={BrandList}/>
                </Switch>
            </Router>
        </>
  );
}

export default App;
