import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import './CompanyIcon.css'

function CompanyIcon(props) {

    const [loadedComp, setLoadedComp] = useState(null)

    let load_comp = async () => {
        let resp = await axios.get(props.url)
        setLoadedComp({...resp.data})
    }

    useEffect(() => {
        load_comp()
    }, [props.url])

    if (loadedComp === null) {
        return (
            <h2>Loading...</h2>
        )
    } else {
    return (
        <Image src={loadedComp.img_url} className='comp-icon'/>
    )
    }
}

export default CompanyIcon