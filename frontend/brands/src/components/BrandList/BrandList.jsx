import React, { Component } from 'react';
import axios from 'axios';
import Brand from '../Brand/Brand'
import BrandDetail from '../BrandDetail/BrandDetail'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default class BrandList extends Component {
    state = {
        brands: [],
        selectedBrandId: null
    }

    selectBrandHandler = (id) => {
        this.setState({ selectedBrandId: id})
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/brands/`)
            .then(response => {
                const brands = response.data
                this.setState({ brands: brands });
            })
    }

    render() {
        let brands = <h1> Loading... .. . </h1>;
        let brands1 = <h1> Loading... .. . </h1>;
        let brands2 = <h1> Loading... .. . </h1>;
        let brands3 = <h1> Loading... .. . </h1>;
        brands = this.state.brands.map(brand => (
            <Brand 
                name={brand.name} 
                img_url={brand.img_url} 
                company_url={brand.company}
                id={brand.id}
                click={() => this.selectBrandHandler(brand.id)}
        />))

        function compareValues(key, order='asc') {
            return function(a,b){
                if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)){
                    return 0
                }

                const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
                const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];

                let comparison = 0;
                if (varA > varB) {
                    comparison = 1; 
                } else if (varA < varB) {
                    comparison = -1;
                }
                return (
                    (order == 'desc') ? (comparison * -1) : comparison
                )
            }
        }
        
        brands = brands.sort(compareValues(this.name))
        console.log("Sorted Brands? ", brands)
        brands1 = brands.filter((b,i)=> i%3 === 0)
        brands2 = brands.filter((b,i)=> i%3 === 1)
        brands3 = brands.filter((b,i)=> i%3 === 2)
    
        if (this.state.selectedBrandId !== null) {
            return (
            <>
                <h3>Selected Brand:</h3>
                <BrandDetail id={this.state.selectedBrandId} />
                <Container>
                    <Row>
                        {brands1}
                        {brands2}
                        {brands3}
                    </Row>
                </Container>           
            </>         
            )
        } else {
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
}
