import React from 'react'

const DateReporter = () => {

    const newDate = new Date().toLocaleDateString();;
    return (
        <div className="datereporter-box">
            <div>The current date is:</div>
            <div>{newDate}</div>
        </div>
    )
}

export default DateReporter