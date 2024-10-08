import React from 'react'

const Header = () => {
    const randomNumber = Math.floor(Math.random() * 100)
    return (
        <div className="App-header">
            Welcome! You've been assigned the name number: {randomNumber}.
        </div>
    )
}

export default Header