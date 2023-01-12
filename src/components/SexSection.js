import React from 'react'
import SexButton from "./SexButton"

const SexSection = ({ userDetails, setUserDetails }) => {
    const handleSelect = (sex) => {
        setUserDetails({ ...userDetails, sex: sex });
    }

    return (
        <div className="flex items-center gap-4">
            <SexButton userDetails={userDetails} sex="M" handleSelect={() => handleSelect("M")} />
            <p className={`${userDetails.sex ? "text-gray-300" : ""} text-3xl`}>or</p>
            <SexButton userDetails={userDetails} sex="F" handleSelect={() => handleSelect("F")} />
        </div>
    )
}

export default SexSection