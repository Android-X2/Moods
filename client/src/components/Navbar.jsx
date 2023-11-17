import React from "react";

import { useLogout } from "../hooks/useLogout";
import Divider from "./Divider";

const Navbar = () => {
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="flex flex-col relative ">
      <div className="mt-16 mr-1 font-display text-7xl self-center">Moods</div>
      <button
        onClick={handleLogout}
        className="self-center font-display h-12 px-6 text-3xl rounded-md bg-black text-white"
      >
        {" "}
        Logout{" "}
      </button>

      <Divider />

      <nav className="">
        <ul className="flex flex-col items-center">
          <li>
            <section>
              <p className="font-display text-2xl">What is Moods?</p>
              <p className="">
                A web application designed to chart your day-to-day moods using
                a color-emotion system.
              </p>
            </section>
          </li>
          <li>
            <section>
              <p className="font-display text-2xl">How to use?</p>
              <p className="">
                Hover over the desired day, and double click to open edit menu.
                Then change to the mood you best felt that day, then double
                click on save.
              </p>
            </section>
          </li>
        </ul>
      </nav>
      <Divider />
    </header>
  );
};

export default Navbar;
