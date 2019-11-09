import React from 'react';
import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function API (props) {
    return (
        <Container>
            <h1>Our API</h1>
            <Tabs defaultActiveKey="intro" id="intro-tab" mountOnEnter={true}>
                <Tab eventKey="intro" title="Introduction">
                    <h1>Introduction</h1>
                    <a href="http://127.0.0.1:8000/">Click here to view the web-based API</a>
                    <p>This API can be a valuable tool for a variety of applications.  We've connected companies and their brands to the polticians and lobbyists who receive donations from them. As the API grows, we'll be adding legislation and connecting it to the companies and politicians as well.  We'll be able to draw a map between the products you buy and the way those companies spend money.  Not only will we be able to track climate legislation, but all types.</p>
                </Tab>
                <Tab eventKey="documentation" title="Documentation">
                    <h1>Documentation</h1>
                    <a href="http://127.0.0.1:8000/">Click here to view the web-based API</a>
                    <p>Using the API is simple.  You can simply click the link above and work from the web-based API or you can use the following endpoints in your own applications: 
                        <ul>
                            <li>/brands</li>
                            <li>/companies</li>
                            <li>/politicians</li>
                            <li>/lobbyist</li>
                            <li>Each end point can be followed by /id to reach details for a specific item from the above lists.</li>
                        </ul>
                    </p>
                </Tab>  
                <Tab eventKey="etc" title="Etc">
                    <h1>Etc!</h1>
                </Tab>
            </Tabs>
        </Container>
    )
}

export default API;