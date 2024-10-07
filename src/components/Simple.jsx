import React from 'react'

const Simple = () => {
    // generate a random number between 0 and 100
    const randomNumber = Math.floor(Math.random() * 100)
    return (
        <div className="oopsie-box">
            This is a random number: {randomNumber}.
        </div>
    )
}

export default Simple