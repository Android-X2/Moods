import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Link } from "react-router-dom";

import Divider from "../components/Divider";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(name, email, password);
  };

  return (
    <header className="">
      <div className="mt-16 mr-1 font-display text-7xl flex justify-center">
        Moods
      </div>
      <Divider />
      <form
        className="flex flex-col items-center space-y-2.5"
        onSubmit={handleSubmit}
      >
        <h3 className="my-2 font-display text-6xl self-center">Signup</h3>
        <div className="w-[70%]">
          <label className="">Name:</label>
          <input
            type="string"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="w-[70%]">
          <label className="">Email:</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="w-[70%]">
          <label>Password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Signup
        </button>
        <Link
          to="/login"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Already Have An Account.
        </Link>
        {error && <div className="error">{error}</div>}
      </form>
    </header>
  );
};

export default Signup;
