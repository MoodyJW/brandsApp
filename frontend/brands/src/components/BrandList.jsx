import React, { Component } from 'react';
import axios from 'axios';
import Brand from './Brand';

export default class BrandList extends Component {
    state = {
        brands: [],
        loadedID: null,
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/brands/`)
            .then(response => {
                let brands = response.data
                this.setState({ brands: brands });
                console.log (brands);
            })
    }

    render() {
        let brands = <p>Brands!</p>
        if (this.state.brands.length > 0) {
            brands = this.state.brands.map((p, i) => <li><Brand key={i} name={p.name} id={p.id} company={p.company} url={p.url} onClick={() => this.setState({loadedID: p.company})}/></li>)
            console.log("Brands", brands)
        }
        return (
            <ul>
                {brands}            
            </ul>
        )
    }
}
