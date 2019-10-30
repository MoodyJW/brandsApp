import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CompanyIcon from '../Company/CompanyIcon'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
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
        <Card style={{ width: '40rem'}}>
            <Image src={loadedBrand.img_url} className='card-img-top'/>
            <h3>{loadedBrand.name} owned by <CompanyIcon url={loadedBrand.company}/></h3> 
            
        </Card>
        )
    }
        
}

export default BrandDetail