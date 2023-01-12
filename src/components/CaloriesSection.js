import React from 'react'

const CaloriesSection = ({ calories }) => {
    return (
        <div className="mt-16 text-5xl">
            {!calories
                ? <p className="text-gray-300">Fill out info</p>
                : <p className="text-gray-800"><span className="text-sky-500">{calories}</span> calories a day</p>}
        </div>
    )
}

export default CaloriesSection