import React, { useState } from "react";
// import { useYearContext } from "../hooks/useYearContext";
// import { useAuthContext } from "../hooks/useAuthContext";

const MoodDetails = (props) => {
  // const { dispatch } = useYearContext();
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

  // const [mood, setMood] = useState(props.day.mood);
  // const { user } = useAuthContext();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  // const handleDoubleClickEdit = () => {
  //   setIsEditing(!isEditing);
  // };
  // const handleDoubleClickSave = () => {
  //   setIsEditing(!isEditing);

  // const newMood = {
  //   selectedYear: props.selectedYear,
  //   week: props.index,
  //   day: props.i,
  //   mood: mood,
  // };

  // const handleMoodChange = () => {
  //   const updateMood = async () => {
  //     const response = await fetch("/mood", {
  //       method: "PATCH",
  //       body: JSON.stringify(newMood),
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Authorization": `Bearer ${user.token}`,
  //       },
  //     });
  //     const json = await response.json();
  //     if (response.ok) {
  //       dispatch({ type: "GET_YEAR", payload: json });
  //     }
  //   };
  //   updateMood();
  // };

  // const handleDoubleClick = () => {
  //   let newMood = {
  //       selectedYear: props.selectedYear,
  //       week: props.index,
  //       day: props.day,
  //     };
  //   setIsEditing(!isEditing);
  //   setMood(newMood)
  //   // const updateMood = async () => {
  //   //   const response = await fetch("/mood", {
  //   //     method: "PATCH",
  //   //     body: JSON.stringify(newMood),
  //   //     headers: {
  //   //       "Content-Type": "application/json",
  //   //       Authorization: `Bearer ${user.token}`,
  //   //     },
  //   //   });
  //   //   const json = await response.json();
  //   //   if (response.ok) {
  //   //     dispatch({ type: "GET_YEAR", payload: json });
  //   //   }
  //   // };
  //   // updateMood()
  // };

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
      {/* {isHovered && (]
        <div className="absolute z-10 bg-white rounded-md shadow-lg mt-2 w-56">
          <ul>
            <li className="px-1 py-2 hover:bg-gray-100 flex items-center">
              <div className="w-56">
                {isEditing ? (
                  // <input
                  //   value={mood}
                  //   onChange={handleMoodChange}
                  //   className="border border-gray-300 w-[80%] rounded-md"
                  // />
                  <div className="flex justify-between">
                    <form className="flex flex-col">
                      <label>
                        <input
                          type="radio"
                          name="selectedMood"
                          value="Angry"
                          defaultChecked={mood === "Angry"}
                          onChange={(e) => setMood(e.target.value)}
                        />
                        Angry
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="selectedMood"
                          value="Disgusted"
                          defaultChecked={mood === "Disgusted"}
                          onChange={(e) => setMood(e.target.value)}
                        />
                        Disgusted
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="selectedMood"
                          value="Fear"
                          defaultChecked={mood === "Fear"}
                          onChange={(e) => setMood(e.target.value)}
                        />
                        Fear
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="selectedMood"
                          value="Happy"
                          defaultChecked={mood === "Happy"}
                          onChange={(e) => setMood(e.target.value)}
                        />
                        Happy
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="selectedMood"
                          value="Sad"
                          defaultChecked={mood === "Sad"}
                          onChange={(e) => setMood(e.target.value)}
                        />
                        Sad
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="selectedMood"
                          value="Surprised"
                          defaultChecked={mood === "Surprised"}
                          onChange={(e) => setMood(e.target.value)}
                        />
                        Surprised
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="selectedMood"
                          value="Blank"
                          defaultChecked={mood === "Blank"}
                          onChange={(e) => setMood(e.target.value)}
                        />
                        Blank
                      </label>
                    </form>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2 w-[100px] h-[50px]"
                      onDoubleClick={handleDoubleClickSave}
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-between">
                    <span className="flex items-center">{mood}</span>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2 w-[100px] h-[50px]"
                      onDoubleClick={handleDoubleClickEdit}
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      )}   */}
    </div>
  );
};

export default MoodDetails;
