import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useYearContext } from "../hooks/useYearContext";

import MoodDetails from "./MoodDetails";
import EmotionDetail from "./EmotionDetail";

const currentDate = new Date();
const startDate = new Date(currentDate.getFullYear(), 0, 1);
const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
const weekNumber = Math.ceil(days / 7) - 1;

const YearDetails = ({ year }) => {
  const { user, dispatch: authDispatch } = useAuthContext();
  const { dispatch } = useYearContext();

  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [location, setLocation] = useState(null);
  const [mood, setMood] = useState(null);
  const [currentMood, setCurrentMood] = useState(null);

  const handleDeleteYear = () => {
    const deleteYear = async () => {
      const response = await fetch(`https://moods-backend.onrender.com/year/${year.year}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${user.token}` },
      });
      // const json = await response.json();
      if (!response.ok) {
        authDispatch({ type: "LOGOUT" });
      }
      if (response.ok) {
        dispatch({ type: "DELETE_YEAR", payload: null });
      }
    };
    deleteYear();
    setIsEditing(false);
    setIsDeleting(false);
  };

  const handleToggleDeleteMenu = () => {
    setIsEditing(false);
    setIsDeleting(!isDeleting);
  };

  const handleClickScroll = () => {
    const element = document.getElementById(`${weekNumber}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleDoubleClick = (e) => {
    let x = e.target.value.split(","),
      newLocation = {
        currentMood: x[3],
        selectedYear: x[2],
        week: x[1],
        day: x[0],
      };
    setIsEditing(true);
    setLocation(newLocation);
    setCurrentMood(newLocation.currentMood);
  };

  const handleUpdateMood = () => {
    const newMood = { ...location, mood: mood };
    const updateMood = async () => {
      const response = await fetch("https://moods-backend.onrender.com/mood", {
        method: "PATCH",
        body: JSON.stringify(newMood),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "GET_YEAR", payload: json });
      }
    };
    updateMood();
    setCurrentMood(mood);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col">
      <section className="space-x-2.5 self-center">
        {year && (
          <button
            onClick={handleClickScroll}
            className="h-10 px-6 font-semibold rounded-md bg-black text-white"
          >
            Go To Current Week
          </button>
        )}
        {year && (
          <button
            onClick={handleToggleDeleteMenu}
            className="h-10 px-6 font-semibold rounded-md bg-black text-white"
          >
            Delete Current Year
          </button>
        )}
      </section>
      {isEditing && !isDeleting && (
        <div>
          <div className="fixed z-40 backdrop-blur-sm h-48 w-56 right-[5%] top-[35%]">
            <div>
              <div>{`Year: ${location.selectedYear}`} </div>
              <div>{`Selected Week: ${Number(location.week) + 1}`} </div>
              <div>{`Selected Day: ${Number(location.day) + 1}`} </div>
            </div>
            <div>Current Mood: {currentMood} </div>
            <div className="border-2 border-black">
              <div className="flex w-[100%]">
                <form className="flex flex-col w-[70%]">
                  <label>
                    <input
                      type="radio"
                      name="selectedMood"
                      value="Anger"
                      defaultChecked={mood === "Anger"}
                      onChange={(e) => setMood(e.target.value)}
                    />
                    Anger
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="selectedMood"
                      value="Disgust"
                      defaultChecked={mood === "Disgust"}
                      onChange={(e) => setMood(e.target.value)}
                    />
                    Disgust
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
                      value="Surprise"
                      defaultChecked={mood === "Surprise"}
                      onChange={(e) => setMood(e.target.value)}
                    />
                    Surprise
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
                <div className="w-[50%]">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full m-2 w-[80px] h-[50px]"
                    onDoubleClick={handleUpdateMood}
                  >
                    Save
                  </button>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2 w-[80px] h-[50px]"
                    onDoubleClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isDeleting && (
        <div className="flex">
          <div className="fixed z-40 inset-0 flex items-center justify-center">
            <div class="rounded overflow-hidden shadow-2xl bg-white">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                  Delete the current year
                </div>
                <div>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full m-2 w-[80px] h-[50px]"
                    onDoubleClick={handleDeleteYear}
                  >
                    Confirm
                  </button>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full m-2 w-[80px] h-[50px]"
                    onDoubleClick={handleToggleDeleteMenu}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {year && (
        <div className="fixed z-40 h-48 w-56 left-[5%] top-[35%]">
          <div>
            <div className="font-display text-1xl">Color Chart and Quick Guide</div>
            <div>
              Hover over the 6 basic emotions to find out which one really
              resonates with you the most.
            </div>
            <section className="">
              <ul className="flex flex-col">
                <li>
                  <EmotionDetail emotion={"Anger"} />
                </li>
                <li>
                  <EmotionDetail emotion={"Disgust"} />
                </li>
                <li>
                  <EmotionDetail emotion={"Fear"} />
                </li>
                <li>
                  <EmotionDetail emotion={"Happy"} />
                </li>
                <li>
                  <EmotionDetail emotion={"Sad"} />
                </li>
                <li>
                  <EmotionDetail emotion={"Surprise"} />
                </li>
              </ul>
            </section>
          </div>
        </div>
      )}
      {year &&
        year["myArray"].map((week, index) => {
          return (
            <div
              className={`flex justify-between ${
                weekNumber === index ? "border-black border-4" : ""
              } `}
              key={index}
              id={index}
            >
              <div className="mr-3">Week {index + 1}</div>
              <div className="flex">
                {week.map((day, i) => {
                  return (
                    <div key={week + i} className="mt-1">
                      <MoodDetails
                        day={day}
                        index={index}
                        i={i}
                        key={week + i}
                        selectedYear={year.year}
                        handleDoubleClick={handleDoubleClick}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default YearDetails;
