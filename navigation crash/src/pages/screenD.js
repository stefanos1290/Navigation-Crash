import React, {useEffect, useState} from 'react';

import { Link } from "react-router-dom";

import Button from '@mui/material/Button'

const ScreenD = () => {
    const [prevPage, setPrevPage] = useState('');

    useEffect(() => {
        setPrevPage(sessionStorage.getItem('PATH_C'))
    }, [])

    return <div className="screenC1_container"><div>D</div>
    <Button variant="contained"><Link className="prevPage_link" to={prevPage}>PREV</Link></Button>
    </div>
}

export default ScreenD;