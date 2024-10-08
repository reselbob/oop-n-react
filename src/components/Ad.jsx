import React from 'react'
import { useId, useState } from 'react';
import DateReporter from './DateReporter';

const Ad = ({ children, onClick }) => {
    const id = useId();
    const [message, setMessage] = useState('');
    const [showOopsie, setShowOopsie] = useState(false);
    const defaultAd = `Default advertisement for the Ad component [${id}].`;


    const showMessage = () => {
        setMessage('Go to our website and buy our stuff!');
        setShowOopsie(true);
    }

    const handleClick = () => {
        onClick ? onClick() : showMessage();
    }

    return (
        <div className="oopsie-box">
            <div id={id} >
                <div className="oopsie-font">
                    {children ? children : defaultAd}
                </div>
                <div>
                    <button className="oopsie-button" onClick={handleClick}>Click me</button>
                </div>
            </div>
            <div className={showOopsie ? 'oopsie-message' : ''}>{message}</div>
            <DateReporter />
        </div>
    )
}

export default Ad