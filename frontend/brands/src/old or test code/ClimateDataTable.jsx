import React, { Component} from 'react';
import Table from 'react-bootstrap/Table';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

export default class ClimateDataTable extends Component {
    render() {
        return (
            <Jumbotron>
                <Container >
                    <h1 className='text-center'>Climate Data</h1>
                    <p className='text-center text-muted'>
                        The information below was obtained from the sustainability reports published by the company or their reports to CDP
                    </p>
                    <Table bordered hover responsive style={{backgroundColor: 'snow'}}>
                        <thead >
                            <tr>
                            <th>Name</th>
                            <th>GHG Emissions Rate</th>
                            <th>GHG Emissions Total</th>
                            <th>Energy Use Rate</th>
                            <th>Energy Use Total</th>
                            <th>Waste Generated Rate</th>
                            <th>Waste Generated Total</th>
                            <th>Water Consumption</th>
                            <th>Water Discharged</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Coca-Cola Inc.</td>
                                <td>
                                    {/* GHG rate */}
                                    <b>2017</b> - 33.96 grams per liter of product<br></br>    
                                    <b>2018</b> - 34.83 grams per liter of product
                                </td>
                                <td>
                                    {/* GHG total */}
                                    <b>*</b>
                                </td>
                                <td>
                                    {/* energy rate */}
                                    <b>2017</b> - 0.40 megajoules per liter of product<br></br>
                                    <b>2018</b> - 0.39 megajoules per liter of product<br></br>
                                </td>
                                <td>
                                    {/* energy total */}
                                    <b>2017</b> - 59070.9 million megajoules<br></br>
                                    <b>2018</b> - 61,464 million megajoules<br></br>
                                </td>
                                <td>
                                    {/* waste rate */}
                                    <b>2016</b> - 9.42 grams per liter<br></br>
                                    <b>2017</b> - 9.42 grams per liter<br></br>
                                </td>
                                <td>
                                    {/* waste total */}
                                    <b>2016</b> - 1441.3kg (in millions)<br></br>
                                    <b>2017</b> - 1360.5kg (in millions)<br></br>
                                </td>
                                <td>
                                    {/* water use */}
                                    <b>2017</b> - 182,455 megaliters<br></br>
                                    <b>2018</b> - 186, 642 megaliters<br></br>
                                </td>
                                <td>
                                    {/* water waste */}
                                    <b>2017</b> - 106,534 megaliters<br></br>
                                    <b>2018</b> - 112,154 megaliters<br></br>
                                </td>
                            </tr>
                            <tr>
                                <td>Procter & Gamble</td>
                                <td>
                                    {/* ghg rate */}
                                    <b>*</b>
                                </td>
                                <td>
                                    {/* ghg total */}
                                    <b>2016</b> - 4.8 million metric tons<br></br>
                                    <b>2017</b> - 4.6 million metric tons<br></br>
                                </td>
                                <td>
                                    {/* energy rate */}
                                    <b>*</b>
                                </td>
                                <td>
                                    {/* energy total */}
                                    <b>2017</b> - 59 million gigajoules<br></br>
                                    <b>2018</b> - 59 million gigajoules<br></br>
                                </td>
                                <td>
                                     {/*waste rate */}
                                    <b>*</b>
                                </td>
                                <td>
                                    {/* waste total */}
                                    <b>2016</b> - 632 thousand metric tons<br></br>
                                    <b>2017</b> - 676 thousand metric tons<br></br>
                                </td>
                                <td>
                                    {/* water use */}
                                    <b>2016</b> - 63670 million cubic meters<br></br>
                                    <b>2017</b> - 62028 million cubic meters<br></br>
                                </td>
                                <td>
                                    {/* waste water */}
                                    <b>*</b>
                                </td>
                            </tr>
                            <tr>
                                <td>Unilever  NOTHING BEYOND THIS IS CORRECT</td>
                                <td>
                                    {/* ghg rate */}
                                    <b>*</b>
                                </td>
                                <td>
                                    {/* ghg total */}
                                    <b>2016</b> - 4.8 million metric tons<br></br>
                                    <b>2017</b> - 4.6 million metric tons<br></br>
                                </td>
                                <td>
                                    {/* energy rate */}
                                    <b>*</b>
                                </td>
                                <td>
                                    {/* energy total */}
                                    <b>2017</b> - 59 million gigajoules<br></br>
                                    <b>2018</b> - 59 million gigajoules<br></br>
                                </td>
                                <td>
                                        {/*waste rate */}
                                    <b>*</b>
                                </td>
                                <td>
                                    {/* waste total */}
                                    <b>2016</b> - 632 thousand metric tons<br></br>
                                    <b>2017</b> - 676 thousand metric tons<br></br>
                                </td>
                                <td>
                                    {/* water use */}
                                    <b>2016</b> - 63670 million cubic meters<br></br>
                                    <b>2017</b> - 62028 million cubic meters<br></br>
                                </td>
                                <td>
                                    {/* waste water */}
                                    <b>*</b>
                                </td>
                            </tr>
                            <tr>
                                <td>Pepsico</td>
                                <td>
                                    {/* ghg rate */}
                                    <b>*</b>
                                </td>
                                <td>
                                    {/* ghg total */}
                                    <b>2016</b> - 4.8 million metric tons<br></br>
                                    <b>2017</b> - 4.6 million metric tons<br></br>
                                </td>
                                <td>
                                    {/* energy rate */}
                                    <b>*</b>
                                </td>
                                <td>
                                    {/* energy total */}
                                    <b>2017</b> - 59 million gigajoules<br></br>
                                    <b>2018</b> - 59 million gigajoules<br></br>
                                </td>
                                <td>
                                        {/*waste rate */}
                                    <b>*</b>
                                </td>
                                <td>
                                    {/* waste total */}
                                    <b>2016</b> - 632 thousand metric tons<br></br>
                                    <b>2017</b> - 676 thousand metric tons<br></br>
                                </td>
                                <td>
                                    {/* water use */}
                                    <b>2016</b> - 63670 million cubic meters<br></br>
                                    <b>2017</b> - 62028 million cubic meters<br></br>
                                </td>
                                <td>
                                    {/* waste water */}
                                    <b>*</b>
                                </td>
                            </tr>
                            <tr>
                            <td>Kellogs</td>
                                <td>
                                    {/* ghg rate */}
                                    <b>*</b>
                                </td>
                                <td>
                                    {/* ghg total */}
                                    <b>2016</b> - 4.8 million metric tons<br></br>
                                    <b>2017</b> - 4.6 million metric tons<br></br>
                                </td>
                                <td>
                                    {/* energy rate */}
                                    <b>*</b>
                                </td>
                                <td>
                                    {/* energy total */}
                                    <b>2017</b> - 59 million gigajoules<br></br>
                                    <b>2018</b> - 59 million gigajoules<br></br>
                                </td>
                                <td>
                                        {/*waste rate */}
                                    <b>*</b>
                                </td>
                                <td>
                                    {/* waste total */}
                                    <b>2016</b> - 632 thousand metric tons<br></br>
                                    <b>2017</b> - 676 thousand metric tons<br></br>
                                </td>
                                <td>
                                    {/* water use */}
                                    <b>2016</b> - 63670 million cubic meters<br></br>
                                    <b>2017</b> - 62028 million cubic meters<br></br>
                                </td>
                                <td>
                                    {/* waste water */}
                                    <b>*</b>
                                </td>
                            </tr>
                            <tr>
                            <td>Mars Inc.</td>
                                <td>
                                    {/* ghg rate */}
                                    <b>*</b>
                                </td>
                                <td>
                                    {/* ghg total */}
                                    <b>2016</b> - 4.8 million metric tons<br></br>
                                    <b>2017</b> - 4.6 million metric tons<br></br>
                                </td>
                                <td>
                                    {/* energy rate */}
                                    <b>*</b>
                                </td>
                                <td>
                                    {/* energy total */}
                                    <b>2017</b> - 59 million gigajoules<br></br>
                                    <b>2018</b> - 59 million gigajoules<br></br>
                                </td>
                                <td>
                                        {/*waste rate */}
                                    <b>*</b>
                                </td>
                                <td>
                                    {/* waste total */}
                                    <b>2016</b> - 632 thousand metric tons<br></br>
                                    <b>2017</b> - 676 thousand metric tons<br></br>
                                </td>
                                <td>
                                    {/* water use */}
                                    <b>2016</b> - 63670 million cubic meters<br></br>
                                    <b>2017</b> - 62028 million cubic meters<br></br>
                                </td>
                                <td>
                                    {/* waste water */}
                                    <b>*</b>
                                </td>
                            </tr>
                            <tr>
                            <td>General Mills</td>
                                <td>
                                    {/* ghg rate */}
                                    <b>*</b>
                                </td>
                                <td>
                                    {/* ghg total */}
                                    <b>2016</b> - 4.8 million metric tons<br></br>
                                    <b>2017</b> - 4.6 million metric tons<br></br>
                                </td>
                                <td>
                                    {/* energy rate */}
                                    <b>*</b>
                                </td>
                                <td>
                                    {/* energy total */}
                                    <b>2017</b> - 59 million gigajoules<br></br>
                                    <b>2018</b> - 59 million gigajoules<br></br>
                                </td>
                                <td>
                                        {/*waste rate */}
                                    <b>*</b>
                                </td>
                                <td>
                                    {/* waste total */}
                                    <b>2016</b> - 632 thousand metric tons<br></br>
                                    <b>2017</b> - 676 thousand metric tons<br></br>
                                </td>
                                <td>
                                    {/* water use */}
                                    <b>2016</b> - 63670 million cubic meters<br></br>
                                    <b>2017</b> - 62028 million cubic meters<br></br>
                                </td>
                                <td>
                                    {/* waste water */}
                                    <b>*</b>
                                </td>
                            </tr>
                            <tr>
                            <td>Mondelez</td>
                                <td>
                                    {/* ghg rate */}
                                    <b>*</b>
                                </td>
                                <td>
                                    {/* ghg total */}
                                    <b>2016</b> - 4.8 million metric tons<br></br>
                                    <b>2017</b> - 4.6 million metric tons<br></br>
                                </td>
                                <td>
                                    {/* energy rate */}
                                    <b>*</b>
                                </td>
                                <td>
                                    {/* energy total */}
                                    <b>2017</b> - 59 million gigajoules<br></br>
                                    <b>2018</b> - 59 million gigajoules<br></br>
                                </td>
                                <td>
                                        {/*waste rate */}
                                    <b>*</b>
                                </td>
                                <td>
                                    {/* waste total */}
                                    <b>2016</b> - 632 thousand metric tons<br></br>
                                    <b>2017</b> - 676 thousand metric tons<br></br>
                                </td>
                                <td>
                                    {/* water use */}
                                    <b>2016</b> - 63670 million cubic meters<br></br>
                                    <b>2017</b> - 62028 million cubic meters<br></br>
                                </td>
                                <td>
                                    {/* waste water */}
                                    <b>*</b>
                                </td>
                            </tr>
                            <tr>
                            <td>Johnson + Johnson</td>
                                <td>
                                    {/* ghg rate */}
                                    <b>*</b>
                                </td>
                                <td>
                                    {/* ghg total */}
                                    <b>2016</b> - 4.8 million metric tons<br></br>
                                    <b>2017</b> - 4.6 million metric tons<br></br>
                                </td>
                                <td>
                                    {/* energy rate */}
                                    <b>*</b>
                                </td>
                                <td>
                                    {/* energy total */}
                                    <b>2017</b> - 59 million gigajoules<br></br>
                                    <b>2018</b> - 59 million gigajoules<br></br>
                                </td>
                                <td>
                                        {/*waste rate */}
                                    <b>*</b>
                                </td>
                                <td>
                                    {/* waste total */}
                                    <b>2016</b> - 632 thousand metric tons<br></br>
                                    <b>2017</b> - 676 thousand metric tons<br></br>
                                </td>
                                <td>
                                    {/* water use */}
                                    <b>2016</b> - 63670 million cubic meters<br></br>
                                    <b>2017</b> - 62028 million cubic meters<br></br>
                                </td>
                                <td>
                                    {/* waste water */}
                                    <b>*</b>
                                </td>
                            </tr>
                            <tr>
                            <td>Kraft Heinz</td>
                                <td>
                                    {/* ghg rate */}
                                    <b>*</b>
                                </td>
                                <td>
                                    {/* ghg total */}
                                    <b>2016</b> - 4.8 million metric tons<br></br>
                                    <b>2017</b> - 4.6 million metric tons<br></br>
                                </td>
                                <td>
                                    {/* energy rate */}
                                    <b>*</b>
                                </td>
                                <td>
                                    {/* energy total */}
                                    <b>2017</b> - 59 million gigajoules<br></br>
                                    <b>2018</b> - 59 million gigajoules<br></br>
                                </td>
                                <td>
                                        {/*waste rate */}
                                    <b>*</b>
                                </td>
                                <td>
                                    {/* waste total */}
                                    <b>2016</b> - 632 thousand metric tons<br></br>
                                    <b>2017</b> - 676 thousand metric tons<br></br>
                                </td>
                                <td>
                                    {/* water use */}
                                    <b>2016</b> - 63670 million cubic meters<br></br>
                                    <b>2017</b> - 62028 million cubic meters<br></br>
                                </td>
                                <td>
                                    {/* waste water */}
                                    <b>*</b>
                                </td>
                            
                            </tr>
                            <tr>
                            <td>Nestle</td>
                                <td>
                                    {/* ghg rate */}
                                    <b>*</b>
                                </td>
                                <td>
                                    {/* ghg total */}
                                    <b>2016</b> - 4.8 million metric tons<br></br>
                                    <b>2017</b> - 4.6 million metric tons<br></br>
                                </td>
                                <td>
                                    {/* energy rate */}
                                    <b>*</b>
                                </td>
                                <td>
                                    {/* energy total */}
                                    <b>2017</b> - 59 million gigajoules<br></br>
                                    <b>2018</b> - 59 million gigajoules<br></br>
                                </td>
                                <td>
                                        {/*waste rate */}
                                    <b>*</b>
                                </td>
                                <td>
                                    {/* waste total */}
                                    <b>2016</b> - 632 thousand metric tons<br></br>
                                    <b>2017</b> - 676 thousand metric tons<br></br>
                                </td>
                                <td>
                                    {/* water use */}
                                    <b>2016</b> - 63670 million cubic meters<br></br>
                                    <b>2017</b> - 62028 million cubic meters<br></br>
                                </td>
                                <td>
                                    {/* waste water */}
                                    <b>*</b>
                                </td>
                            </tr>
                            
                        </tbody>
                    </Table>
                </Container>
            </Jumbotron>
            
        )
    }
}