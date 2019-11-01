import React, { Component } from 'react';
import axios from 'axios';
import Politician from './Politician.jsx';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default class PolticianList extends Component {
    state = {
        politicians: [],
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/politicians/')
            .then(response => {
                const politicians = response.data
                this.setState({ politicians: politicians })
            })
    }
    render() {
        let politicians;
        let politicians1;
        let politicians2;
        let politicians3;
        politicians = this.state.politicians.filter(politician => politician.name.toLowerCase().match(this.props.filter))
        politicians = politicians.map(politician => <Politician 
                                                        key={politician.id} 
                                                        id={politician.id} 
                                                        name={politician.name} 
                                                        state={politician.state} 
                                                        district={politician.district} 
                                                        party={politician.party}/>)
        politicians1 = politicians.filter((p,i) => i%3===0)
        politicians2 = politicians.filter((p,i) => i%3===1)
        politicians3 = politicians.filter((p,i) => i%3===2)
        
        return (
            <>
                <Container>
                    <Row>
                        {politicians1}
                        {politicians2}
                        {politicians3}
                    </Row>
                </Container>
            </>
        )
    }
}