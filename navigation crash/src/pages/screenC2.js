import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Link } from "react-router-dom";

import Button from '@mui/material/Button'

const ScreenC2 = () => {
    const [option, setOption] = useState('');
    const [prevPage, setPrevPage] = useState('');
    const [counter, setCounter] = useState(5);

    const navigate = useNavigate();
    
    useEffect(() => {
        const pathname = window.location.pathname;
        sessionStorage.setItem('PATH_C', pathname)
    }, [])
    
    useEffect(() => {
        setOption(sessionStorage.getItem('screenb2selection'))
        setPrevPage(sessionStorage.getItem('PATH_B'))
    }, [])

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        if (counter === 0 ) {
            navigate('/screenD')
        }
    }, [counter]);
    
    return <div className="screenC2_container"><div className="screenC2_title">Screen C2</div>
    <div className="C2_option_text">{option}</div>
    <div className="C2_message">You will be redirected to the next screen in <p className="counter">{counter}</p></div>
    <Button variant="contained"><Link className="prevPage_link" to={`${prevPage}`}>PREV</Link></Button></div>
}

export default ScreenC2