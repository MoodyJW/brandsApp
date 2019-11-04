import React, { Component } from 'react';
import axios from 'axios';
import Brand from '../Brand/Brand'
import BrandDetail from '../BrandDetail/BrandDetail'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import './BrandList.css'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)  

export default class BrandList extends Component {

    constructor(props) {
        super(props)
        this.myRef = React.createRef()   // Create a ref object 
    }

    state = {
        brands: [],
        selectedBrandId: null
    }
    
    selectBrandHandler = (id) => {
        this.setState({ selectedBrandId: id})
        window.scrollTo(0, 0)
    }
        
    toggleOpenClose = () => {
        this.setState({ selectedBrandId: null})
    }

    componentDidMount() {
         axios.get(`http://127.0.0.1:8000/brands/`)
             .then(response => {
                 const brands = response.data
                this.setState({ brands });
            })
    }

    render() {
        let brands = <h1> Loading... .. . </h1>;
        let brands1 = <h1> Loading... .. . </h1>;
        let brands2 = <h1> Loading... .. . </h1>;
        let brands3 = <h1> Loading... .. . </h1>;
        brands = this.state.brands.filter(brand => brand.name.toLowerCase().match(this.props.filter))
        brands = brands.map(brand => <Brand key={brand.id} name={brand.name} img_url={brand.img_url} company_url={brand.company} click={() => this.selectBrandHandler(brand.id)}/>)
        brands1 = brands.filter((b,i)=> i%3 === 0)
        brands2 = brands.filter((b,i)=> i%3 === 1)
        brands3 = brands.filter((b,i)=> i%3 === 2)
    
        if (this.state.selectedBrandId !== null) {
            return (
                <>        
                    <Container ref={this.myRef} style={{ justifyContent: 'center' }}>>
                        <Row >
                            <h3>Selected Brand:</h3>
                            <Button onClick={() => this.toggleOpenClose()}>X</Button>
                        </Row>
                        <BrandDetail id={this.state.selectedBrandId} />
                        <Row className='needs-space'>
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
