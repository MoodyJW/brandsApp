import React, { Component } from 'react';
import axios from 'axios';

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
        return (
            <ul>
                { this.state.brands.map(brand => <li>{brand.name}, {brand.company}</li>) }            
            </ul>
        )
    }
}
