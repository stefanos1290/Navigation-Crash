import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { Link } from "react-router-dom";

import { useMutation } from 'react-query';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button'

import '../styles/screens.css'

const ScreenB1 = () => {
    const [choice, setChoice] = useState('');

    useEffect(() => {
        const pathname = window.location.pathname;
        sessionStorage.setItem('PATH_B', pathname)
    }, [])

    useEffect(() => {
        sessionStorage.setItem('screenb1selection', choice)
    }, [choice])

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

    return (<div className="screenB1_container">
    <div className="screenB1_title">SCREEN B1</div>
    <FormControl sx={{width: 200}}>
    <Select
    labelId="demo-simple-select-autowidth-label"
    id="demo-simple-select-autowidth"
    label="--Please choose an option--"
    onChange={(e) => {
        const selectedOption = e.target.value;
        setChoice(selectedOption);
    }}>
    <InputLabel id="demo-simple-select-autowidth-label">--Please choose an option--</InputLabel>
    <MenuItem id="choiceA" value="Choice A">Choice A</MenuItem>
    <MenuItem id="choiceB" value="Choice B">Choice B</MenuItem>
    <MenuItem value="Choice C">Choice C</MenuItem>
    <MenuItem value="Choice D">Choice D</MenuItem>
    <MenuItem value="Choice E">Choice E</MenuItem>
    </Select>
    </FormControl>
    <Button onClick={() => mutation.mutate()} variant="contained"><Link className="nextPage_link" to='/screenC1'>NEXT</Link></Button>


    </div>
    )}
export default ScreenB1