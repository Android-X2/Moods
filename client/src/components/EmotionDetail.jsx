import React, { useState } from "react";

const EmotionDetail = ({ emotion }) => {
  const [isHovered, setIsHovered] = useState(false);

  const color = {
    Anger: "bg-red-400",
    Disgust: "bg-emerald-300",
    Fear: "bg-violet-400",
    Happy: "bg-lime-300",
    Sad: "bg-blue-600",
    Surprise: "bg-yellow-400",
    Blank: "bg-slate-400",
  };
  const colorCode = color[emotion];

  const moreEmotions = {
    Anger: ["Mad", "Hurt", "Threatened", "Distant"],
    Disgust: ["Disappointed", "Awful", "Disapproval", "Avoidance"],
    Fear: ["Scared", "Anxious", "Rejected", "Insecure"],
    Happy: ["Joyful", "Proud", "Optimistic", "Peaceful"],
    Sad: ["Guilty", "Despair", "Lonely", "Bored"],
    Surprise: ["Confused", "Startled", "Amazed", "Excited"],
  };

  const emotionCode = moreEmotions[emotion];

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`${colorCode} text-black text-center`}>{emotion}</div>
      {isHovered && emotionCode.map((x) => <div key={x}>{x}</div>)}
    </div>
  );
};

export default EmotionDetail;
