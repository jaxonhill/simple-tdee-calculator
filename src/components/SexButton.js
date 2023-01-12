import React from 'react'

const SexButton = ({ userDetails, sex, handleSelect }) => {
    return (
        <button onClick={handleSelect} className={`${(userDetails.sex === sex) ? "text-gray-800" : "text-gray-300"} text-5xl w-32 h-32 bg-white shadow rounded-2xl hover:shadow-lg hover:bg-gray-50`}>{sex}</button>
    )
}

export default SexButton