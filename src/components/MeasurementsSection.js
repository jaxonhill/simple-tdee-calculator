import React from 'react'
import { useState } from "react";

const divClassStyles = "p-4 bg-white rounded-2xl shadow flex flex-col items-center gap-4"

const isNumber = (strToCheck) => {
    if (typeof strToCheck === "string") {
        return !isNaN(strToCheck);
    }
}

const MeasurementsSection = ({ userDetails, setUserDetails }) => {

    const handleChange = (e, forWhat) => {
        // Check that the input is a number
        if (!isNumber(e.target.value)) {
            return;
        };

        switch (forWhat) {
            case "age":
                setUserDetails({ ...userDetails, age: e.target.value });
                break;
            case "weight":
                setUserDetails({ ...userDetails, weight: e.target.value });
                break;
            case "feet":
                setUserDetails({ ...userDetails, feet: e.target.value });
                break;
            case "inches":
                setUserDetails({ ...userDetails, inches: e.target.value });
                break;
            default:
                break;
        }

    }

    return (
        <div className="flex gap-4">
            <div className={divClassStyles + " w-32"}>
                <label className="text-2xl hover:cursor-pointer" htmlFor="age">Age</label>
                <div className="flex w-full items-center border-b-2 border-b-gray-300 justify-center">
                    <input onChange={(e) => handleChange(e, "age")} value={userDetails.age ? userDetails.age : ""} className="w-16 text-5xl p-0 focus:outline-0 text-center text-gray-800" name="age" id="age" type="text" />
                </div>
            </div>
            <div className={divClassStyles + " w-64"}>
                <label className="text-2xl hover:cursor-pointer" htmlFor="weight">Weight</label>
                <div className="flex w-full items-center border-b-2 border-b-gray-300 justify-center">
                    <input onChange={(e) => handleChange(e, "weight")} value={userDetails.weight ? userDetails.weight : ""} className="w-24 text-5xl p-0 focus:outline-0 text-center text-gray-800" name="weight" id="weight" type="text" />
                    <label className={`${!userDetails.weight ? "text-gray-300" : ""} text-5xl pl-4`} htmlFor="weight">lbs</label>
                </div>
            </div>
            <div className={divClassStyles + " w-64"}>
                <label className="text-2xl hover:cursor-pointer" htmlFor="feet">Height</label>
                <div className="flex w-full items-center border-b-2 border-b-gray-300 justify-center">
                    <input onChange={(e) => handleChange(e, "feet")} value={userDetails.feet ? userDetails.feet : ""} className="w-14 text-5xl p-0 focus:outline-0 text-center text-gray-800" name="height" id="feet" type="text" />
                    <label className={`${!userDetails.feet ? "text-gray-300" : ""} text-5xl`} htmlFor="feet">ft</label>
                    <input onChange={(e) => handleChange(e, "inches")} value={userDetails.inches ? userDetails.inches : ""} className="w-14 text-5xl p-0 focus:outline-0 text-center text-gray-800" type="text" id="inches" />
                    <label className={`${!userDetails.inches ? "text-gray-300" : ""} text-5xl`} htmlFor="inches">in</label>
                </div>
            </div>
        </div>
    )
}

export default MeasurementsSection