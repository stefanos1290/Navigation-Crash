import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { Link } from "react-router-dom";

import { useMutation } from 'react-query';

import { CFormCheck } from '@coreui/react'

import Button from '@mui/material/Button'

const ScreenB2 = () => {
    const [option, setOption] = useState('');

    useEffect(() => {
        const pathname = window.location.pathname;
        sessionStorage.setItem('PATH_B', pathname)
    }, [])

    useEffect(() => {
        sessionStorage.setItem('screenb2selection', option)
    }, [option])

    const mutation = useMutation('rSubmitSelection', () => {
        // normally here I would have a POST request
        // and I would have send my options but since the API it's a GET, I'm using GET request
            return axios.get('http://localhost:3000/rSubmitSelection')
    }, {
        onSuccess: (res) => {
        // i'm logging it here because react-query doesn't show mutations on dev tools
        // since they are primarily used for POST requests
            console.log(res)
        }
    }
    )

    return (<div className="screenB2_container"><div className="screenB2_title">Screen B2</div>
    <div>
    <form onChange={(e) => {
        const selectedOption = e.target.value;
        setOption(selectedOption);
    }}>
            <CFormCheck type="radio" value="Option 1" name="flexRadioDefault" id="1" label="Option 1"/>
            <CFormCheck type="radio" value="Option 2" name="flexRadioDefault" id="2" label="Option 2"/>
            <CFormCheck type="radio" value="Option 3" name="flexRadioDefault" id="3" label="Option 3"/>
            <CFormCheck type="radio" value="Option 4" name="flexRadioDefault" id="4" label="Option 4"/>
            <CFormCheck type="radio" value="Option 5" name="flexRadioDefault" id="5" label="Option 5"/>
    </form>
    </div>
    <div>
        <Button variant="contained" onClick={() => mutation.mutate()}><Link className="nextPage_link" to='/screenC2'>NEXT</Link></Button>
            </div>
    </div>)
}

export default ScreenB2