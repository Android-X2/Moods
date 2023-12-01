import React, { useEffect, useState } from "react";
import { useYearContext } from "../hooks/useYearContext";
import YearDetails from "../components/YearDetails";
import Navbar from "../components/Navbar";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  //call data from the mongodb set up.
  const { user, dispatch: authDispatch } = useAuthContext();
  const { year, dispatch } = useYearContext();
  const [yearValues, setYearValues] = useState(null);

  useEffect(() => {
    const fetchYears = async () => {
      const response = await fetch("https://moods-backend.onrender.com/year", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      if (response.ok) {
        const arrayYears = json.map((x) => x.year);
        setYearValues(arrayYears);
      }
      if (!response.ok) {
        authDispatch({ type: "LOGOUT" });
      }
    };
    fetchYears();
  }, [user.token, authDispatch, year, dispatch]);

  const handleGetYear = (e) => {
    const fetchYear = async () => {
      const response = await fetch(`/year/${e.target.value}`, {
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
    fetchYear();
  };

  const handleCreateYear = () => {
    const createYear = async () => {
      const response = await fetch("/year", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      if (!response.ok) {
        //authDispatch({ type: "LOGOUT" });
      }
      if (response.ok) {
        dispatch({ type: "CREATE_YEAR", payload: json });
      }
    };
    createYear();
  };

  return (
    <div className="flex bg-slate-100 justify-center min-h-screen">
      <div className="flex flex-col w-1/3 ">
        <Navbar />
        <div className="flex space-x-2.5 flex-col">
          <button onClick={handleCreateYear} className="font-display text-2xl">Create Current Year</button>

          <div className="flex flex-row space-x-2.5 self-center">
            <div className="font-display text-3xl">Years:</div>
            <div className="flex justify-start space-x-2.5">
              {yearValues &&
                yearValues.map((x) => (
                  <button onClick={handleGetYear} value={x} key={x} className="text-2xl">
                    {x}
                  </button>
                ))}
            </div>
          </div>
        </div>
        <YearDetails year={year} />
      </div>
    </div>
  );
};

export default Home;
