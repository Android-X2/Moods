import React, { useState } from "react";
// import { useYearContext } from "../hooks/useYearContext";
// import { useAuthContext } from "../hooks/useAuthContext";

const MoodDetails = (props) => {
  const color = {
    Anger: "bg-red-400",
    Disgust: "bg-emerald-300",
    Fear: "bg-violet-400",
    Happy: "bg-lime-300",
    Sad: "bg-blue-600",
    Surprise: "bg-yellow-400",
    Blank: "bg-slate-400",
  };

  const colorCode = color[props.day.mood];

  const [isHovered, setIsHovered] = useState(false);


  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="p-1 relative m-[0.5px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`${colorCode} hover:bg-blue-700 text-black font-bold py-2 px-4 rounded ${
          isHovered ? "bg-blue-700" : ""
        }`}
        onDoubleClick={props.handleDoubleClick}
        value={[props.i, props.index, props.selectedYear, props.day.mood]}
      >
        {props.i + 1}
      </button>
    </div>
  );
};

export default MoodDetails;
