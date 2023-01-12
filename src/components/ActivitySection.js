import React from 'react'
import ActivityButton from "./ActivityButton"

const options = [
    {
        id: 1,
        title: "Sedentary",
        description: "little or no exercise, desk job",
    },
    {
        id: 2,
        title: "Lightly Active",
        description: "light exercise 1-3 days a week",
    },
    {
        id: 3,
        title: "Moderately Active",
        description: "moderate exercise 4-6 days a week",
    },
    {
        id: 4,
        title: "Very Active",
        description: "hard exercise everyday",
    },
    {
        id: 5,
        title: "Extra Active",
        description: "athlete, training for marathon, etc"
    }
]

const ActivitySection = ({ userDetails, setUserDetails }) => {
    const handleSelect = (id) => {
        setUserDetails({ ...userDetails, activity: id });
    }

    return (
        <div className="grid gap-4 grid-cols-3 grid-flow-row">
            {options.map(activity => <ActivityButton key={activity.id} activity={activity} isSelected={userDetails.activity === activity.id} handleSelect={handleSelect} />)}
        </div>
    )
}

export default ActivitySection