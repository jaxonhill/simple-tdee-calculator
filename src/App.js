import React from "react";
import SexSection from "./components/SexSection";
import MeasurementsSection from "./components/MeasurementsSection";
import ActivitySection from "./components/ActivitySection";
import CaloriesSection from "./components/CaloriesSection";
import { useState, useRef } from "react";

const initialUserDetails = {
  sex: null,
  age: null,
  weight: null,
  feet: null,
  inches: null,
  activity: null,
}

const isCalcReady = (details) => {
  let values = Object.values(details);
  for (let i = 0; i < values.length; i++) {
    if (values[i] === 0 || !values[i] || values[i] === "") {
      return false;
    }
  }
  return true;
}

const calculateCalories = (details) => {
  // Make conversions and create variables
  let sex = details.sex;
  let age = details.age;
  let weight = convertToKg(details.weight);
  let height = convertToCm(details.feet, details.inches);
  let activity = details.activity;

  let BMR;

  if (sex === "M") {
    BMR = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
  } else {
    BMR = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
  }

  let TDEE;

  switch (activity) {
    case 1: // Sedentary
      TDEE = BMR * 1.2;
      break;
    case 2: // Lightly active
      TDEE = BMR * 1.375;
      break;
    case 3: // Moderately active
      TDEE = BMR * 1.55;
      break;
    case 4: // Very active
      TDEE = BMR * 1.725;
      break;
    case 5: // Extra active
      TDEE = BMR * 1.9;
      break;
  }

  return TDEE;

}

const convertToKg = (lbs) => {
  return Number(lbs) / 2.2046;
}

const convertToCm = (feet, inches) => {
  let newInches = (Number(feet) * 12) + Number(inches);
  return newInches * 2.54;
}

function App() {
  const [userDetails, setUserDetails] = useState(initialUserDetails);
  const [calories, setCalories] = useState(null);

  if (isCalcReady(userDetails)) {
    let newCalories = Math.round(calculateCalories(userDetails));

    if (newCalories !== calories) {
      setCalories(newCalories);
    }

  }

  return (
    <div className="flex flex-col gap-8 w-screen h-screen bg-gray-100 items-center py-12 font-poppins text-gray-600 font-bold">
      <h1 className="text-5xl text-gray-800">Simple TDEE Calculator</h1>
      <SexSection userDetails={userDetails} setUserDetails={setUserDetails} />
      <MeasurementsSection userDetails={userDetails} setUserDetails={setUserDetails} />
      <ActivitySection userDetails={userDetails} setUserDetails={setUserDetails} />
      <CaloriesSection calories={calories} />
    </div>
  );
}

export default App;
