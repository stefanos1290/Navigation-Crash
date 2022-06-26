import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { useQuery } from 'react-query';

import '../styles/screens.css'

const ScreenA = () => {
    const navigate = useNavigate();

    const rLogin = useQuery('rLogin', () =>
        axios.get('http://localhost:3000/rLogin'),
        {enabled: !sessionStorage.getItem('SESSION_ID'),
            onSuccess: (data) => {
                sessionStorage.setItem('SESSION_ID', data.data.sessionId)
            }
        }
        )

    const {
        data,
        error,
        isFetching,
        isLoading
    } = useQuery('rFetchExperiments', () =>
        axios.get('http://localhost:3000/rFetchExperiments'),
        {
            onSuccess: (data) => {
                if (data.data !== 'noScreenB') {
                    navigate('/' + data.data)
                } if (data.data === 'noScreenB') {
                    navigate('/screenC2')
                }
            }}
    )

    return (
    <div data-testid='screenA' className="screenA_container">A</div>
    )
}

export default ScreenA;