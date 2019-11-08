import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import axios from 'axios'
import './CompanyIcon.css'
import Rating from 'react-rating'

function CompanyIcon(props) {

    const [loadedComp, setLoadedComp] = useState(null)

    let load_comp = async () => {
        let resp = await axios.get('http://127.0.0.1:8000/companies/' + props.id)
        setLoadedComp({...resp.data})
    }

    useEffect(() => {
        console.log('ID:', props.id)
        load_comp()
    }, [props.id])

    if (loadedComp === null) {
        return (
            <h2>Loading...</h2>
        )
    } else {
    return (
        <>
            <Image src={loadedComp.img_url} className='comp-icon'/>
            <OverlayTrigger
                key={'#lobbying-total'}
                placement={'#lobbying-total'}
                overlay={
                    <Tooltip id={`lobbying-total`}>
                        Data sourced from Open-Secrets
                    </Tooltip>
                }
                >
                <div id='desc'>
                    <p>Lobbying Total 2019: ${loadedComp.lobbying_total_year.toLocaleString()}</p>
                    <p>Total Donated to Politicians: ${loadedComp.politicians_total_year.toLocaleString()}</p>
                    <p>PAC's Total 2019:</p>
                    <p>BrandsApp Rating:</p>
                    <Rating  fullSymbol='fas fa-leaf' initialRating={2.5} readonly/>
                </div>
            </OverlayTrigger>
            
        </>
    )
    }
}

export default CompanyIcon