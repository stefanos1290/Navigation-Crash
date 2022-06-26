import React, { useEffect } from 'react';

import { Link } from "react-router-dom";

import Button from '@mui/material/Button'

const ScreenB3 = () => {

    useEffect(() => {
        const pathname = window.location.pathname;
        sessionStorage.setItem('PATH_B ', pathname)
    }, [])

    return <div className="screenB3_container"><div className="screenB3_title">Screen B3</div>
    <div className="b3_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
    <Button variant="contained"><Link className="nextPage_link" to='/screenC2'>NEXT</Link></Button></div>
}

export default ScreenB3;