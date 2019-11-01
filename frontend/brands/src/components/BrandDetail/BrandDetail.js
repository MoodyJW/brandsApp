import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CompanyIcon from '../Company/CompanyIcon'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import './BrandDetail.css'
import axios from 'axios'

function BrandDetail(props) {

    const api_brand_head_url = 'http://127.0.0.1:8000/brands/'

    const [loadedBrand, setLoadedBrand] = useState(null)

    let load_brand = async () => {
        let resp = await axios.get(api_brand_head_url + props.id)
        setLoadedBrand({...resp.data, id: props.id})
    }

    useEffect(() => {
        load_brand()
    }, [props.id])
    
    if (loadedBrand === null) {
        return (
            <p>Loading...</p>
        )
    } else {
        return (
            <Container className="brand-detail">
                <Row>
            <Image src={loadedBrand.img_url}/>
            <h3>{loadedBrand.name} owned by <CompanyIcon id={loadedBrand.company_id}/></h3> 
            </Row>
            </Container>
        )
    }
        
}

export default BrandDetail