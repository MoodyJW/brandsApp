import React, { Component } from 'react';
import axios from 'axios';
import image from '../testImage.svg';

export default class CompanyDetails extends Component {

    state = {
        company: null,
        loadedID: null,
    }
    
    loadCompany = async () => {
        let resp = await axios.get('http://127.0.0.1:8000/companies/' + this.props.id)
        console.log ('loadCompany:', resp)
        this.setState({company: resp.data, loadedID: resp.data.id})
    }

    render = () => {
        let company = <p>Select a company!</p>
        if (this.state.company) {
            company = (
                <ul>
                    <img src={image} alt="Company"/>
                    <li>{this.state.company.name}
                        <ul>{this.state.company.id}</ul>
                    </li>

                </ul>
            )
        }
        if (this.props.id && this.props.id !== this.state.loadedID) {
            this.loadCompany()
        }

        return (<div>{company}</div>)
    }
}