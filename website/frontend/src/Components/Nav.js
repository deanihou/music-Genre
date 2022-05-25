import React from "react";
import { useThemeState } from "../Hooks/useTheme";

import { Link } from "react-router-dom";

import { MdWbSunny } from "react-icons/md";
import { RiMoonClearFill } from "react-icons/ri";
import { TiInfoLarge } from "react-icons/ti";
import { BsSoundwave } from "react-icons/bs";

import { motion } from "framer-motion";

const Nav = () => {
  const [colorTheme, setTheme] = useThemeState();

  return (
    <nav className="sticky top-0 w-full duration-500 bg-gray-50 dark:bg-neutral-900 bg-opacity-70 backdrop-blur-md border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-transparent z-10">
      <div className="relative h-8 container flex flex-wrap justify-between items-center mx-auto">
        <p className="md:hidden"></p>
        <Link
          to="/"
          className="hidden md:block duration-500  hover:text-gray-800 dark:text-white text-neutral-800 font-MajorMonoDisplay text-sm"
        >
          NEU Case Study
        </Link>
        <div className="abolute right-5 flex justify-evenly items-center space-x-3">
          <Link
            className="rounded-full flex items-center text-gray-500 hover:text-gray-700 duration-300 dark:text-white"
            to="/sound"
          >
            <p className="text-sm order-2 dark:text-white"> sound </p>
            <BsSoundwave className="w-5 h-5 order-1 mr-3" />
          </Link>
          <Link
            className="rounded-full p-1 text-gray-500 hover:text-gray-700 duration-300 dark:text-white"
            to="/about"
          >
            <TiInfoLarge className="w-5 h-5 dark:text-white" />
          </Link>
          <button
            onClick={() => {
              if (colorTheme === "light") {
                setTheme("dark");
                localStorage.setItem("theme", "dark");
                return;
              }
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
            className="rounded-full bg-gray-50 dark:bg-gray-800 p-1 border-2 border-gray-200 dark:border-gray-700 text-gray-500 hover:text-gray-700 duration-300"
          >
            {colorTheme === "light" ? (
              <motion.div>
                <RiMoonClearFill className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.div>
                <MdWbSunny className="w-5 h-5" />
              </motion.div>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
