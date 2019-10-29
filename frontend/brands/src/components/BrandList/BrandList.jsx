import React, { Component } from 'react';
import axios from 'axios';
import Brand from '../Brand/Brand'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default class BrandList extends Component {
    state = {
        brands: [],
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/brands/`)
            .then(response => {
                const brands = response.data
                this.setState({ brands });
                console.log (brands);
            })
    }

    render() {
        let brands = <h1> Loading... .. . </h1>;
        let brands1 = <h1> Loading... .. . </h1>;
        let brands2 = <h1> Loading... .. . </h1>;
        let brands3 = <h1> Loading... .. . </h1>;
        brands = this.state.brands.map(brand => <Brand name={brand.name} img_url={brand.img_url} company_url={brand.company} />)
        brands1 = brands.filter((b,i)=> i%3 === 0)
        brands2 = brands.filter((b,i)=> i%3 === 1)
        brands3 = brands.filter((b,i)=> i%3 === 2)

        return (
        <>
            <Container>
                <Row>
                    {brands1}
                    {brands2}
                    {brands3}
                </Row>
            </Container>           
        </>         
        )
    }
}
