import React from 'react'

const ActivityButton = ({ activity, isSelected, handleSelect }) => {
    return (
        <button onClick={() => handleSelect(activity.id)} className="p-6 text-gray-800 bg-white shadow rounded-2xl hover:shadow-lg hover:bg-gray-50">
            <p className={`${!isSelected ? "text-gray-300" : ""} text-3xl`}>{activity.title}</p>
            <p className={`${!isSelected ? "text-gray-300" : ""} font-medium`}>{activity.description}</p>
        </button>
    )
}

export default ActivityButton