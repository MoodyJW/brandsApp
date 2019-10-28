import React, { Component } from 'react';
import axios from 'axios';

export default class SearchBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        searchString: "",
        companies: []
      };
      this.handleChange = this.handleChange.bind(this);
    }
  
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/companies/')
        .then(response => {
            const companies = response.data
            this.setState({ companies: companies })
            console.log ('COMPANIES:', companies)
        })
      this.refs.search.focus();
    }
  
    handleChange() {
      this.setState({
        searchString: this.refs.search.value
      });
    }
  
    render() {
      let _companies = this.state.companies;
      let search = this.state.searchString.trim().toLowerCase();
  
      if (search.length > 0) {
        _companies = _companies.filter(function(company) {
          return company.name.toLowerCase().match(search);
        });
      }
  
      return (
        <div>
          <h3>Search for a company here</h3>
          <div>
            <input
              type="text"
              value={this.state.searchString}
              ref="search"
              onChange={this.handleChange}
              placeholder="type name here"
            />
            <ul>
              {_companies.map(l => {
                return (
                  <li>
                    {l.name} <a href="#">should be a link to brands</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      );
    }
}