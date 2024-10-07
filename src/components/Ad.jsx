import React from 'react'
import { useId } from 'react';
import DateReporter from './DateReporter';

const Ad = ({ children, onClick }) => {
    const id = useId();
    const defaultAd = `This is the default advertisement for the Ad component ${id}. Isn't it great?`;
    const handleClick = () => {
        onClick ? onClick() : console.log(`Default handler for ${id}`);
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
            <DateReporter />
        </div>

    )
}

export default Ad