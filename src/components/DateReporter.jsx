import React from 'react'

const DateReporter = () => {

    const newDate = new Date().toString();
    return (
        <div>
            The current date is: {newDate}
        </div>
    )
}

export default DateReporter