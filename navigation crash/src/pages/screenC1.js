import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { Link } from "react-router-dom";

import Button from '@mui/material/Button'

const ScreenC1 = () => {
    const [choice, setChoice] = useState('');
    const [prevPage, setPrevPage] = useState('');
    const [counter, setCounter] = useState(5);

    const navigate = useNavigate();

    useEffect(() => {
        const pathname = window.location.pathname;
        sessionStorage.setItem('PATH_C', pathname)
    }, [])

    useEffect(() => {
        setChoice(sessionStorage.getItem('screenb1selection'))
        setPrevPage(sessionStorage.getItem('PATH_B'))
    }, [])

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        if (counter === 0 ) {
            navigate('/screenD')
        }
    }, [counter]);
    
    return <div className="screenC1_container"><div className="screenC1_title">Screen C1</div>
    <div className="C1_choice_text">{choice}</div>
    <div className="C1_message">You will be redirected to the next screen in <p className="counter">{counter}</p>
    </div>
    <Button variant="contained"><Link className="prevPage_link" to={`${prevPage}`}>PREV</Link></Button>
    </div>
}

export default ScreenC1;