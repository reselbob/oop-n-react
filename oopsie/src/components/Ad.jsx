import React from 'react'
import { useId } from 'react';

const Ad = ({ children, onClick }) => {

    const id = useId();
    const handleClick = () => {
        onClick ? onClick() : console.log(`Default handler for ${id}`);
    }

    return (
        <div id={id} className="oopsie-box">
            <div className="oopsie-font">
                {children ? children : `Default Ad for ${id}`}
            </div>
            <div>
                <button className="oopsie-button" onClick={handleClick}>Click me</button>
            </div>
        </div>
    )
}

export default Ad