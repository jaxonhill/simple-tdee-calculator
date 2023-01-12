import React from "react";
import SexSection from "./components/SexSection";
import MeasurementsSection from "./components/MeasurementsSection";
import ActivitySection from "./components/ActivitySection";
import { useState } from "react";

function App() {
  const [userDetails, setUserDetails] = useState({});

  return (
    <div className="flex flex-col gap-8 w-screen h-screen bg-gray-100 items-center py-12 font-poppins text-gray-800 font-bold">
      <h1 className="text-5xl">Simple TDEE Calculator</h1>
      <SexSection />
      <MeasurementsSection />
      <ActivitySection />
    </div>
  );
}

export default App;
