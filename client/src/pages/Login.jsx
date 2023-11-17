import React, { useState } from "react";
import { Link } from "react-router-dom";

import Divider from "../components/Divider";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
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
        <h3 className="my-2 font-display text-6xl self-center">Login</h3>
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
        <div className="space-x-2.5">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Login
          </button>
          <Link
            to="/signup"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Sign Up
          </Link>
        </div>
        {error && <div className="error">{error}</div>}
      </form>
    </header>
  );
};

export default Login;
