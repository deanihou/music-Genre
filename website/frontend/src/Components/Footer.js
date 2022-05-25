import React from "react";

const Footer = () => {
  return (
    <footer className="py-36">
      {" "}
      <div className="w-full max-w-md px-7 py-10 mx-auto = rounded-2xl shadow-xl">
        <div className="flex flex-col">
          <div className="flex">
            <ul className="flex items-center justify-center space-x-2">
              <li className="flex flex-col items-center space-y-2">
                <div
                  className="story-ring flex justify-center items-center
                  bg-gradient-to-tl from-green-200 to-green-500 
                  rounded-full relative cursor-pointer
                  hover:from-green-400 hover:to-green-600
                  transition-all duration-150 delay-100 
                  hover:animate-pulse"
                >
                  <a
                    className="block dark:bg-white bg-white p-1 rounded-full"
                    href="#"
                  >
                    <img
                      className="w-16 rounded-full"
                      src="https://media.discordapp.net/attachments/953565721143676951/978954105605218314/unknown.png?width=708&height=701"
                    />
                  </a>

                  <i className="absolute mdi mdi-plus mdi-18px mx-1 text-gray-500"></i>
                </div>

                <span className="story-text font-medium text-black dark:text-white">
                  Espinoza
                </span>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <div
                  className="story-ring flex justify-center items-center
                  bg-gradient-to-tl from-green-200 to-green-500 
                  rounded-full relative cursor-pointer
                  hover:from-green-400 hover:to-green-600
                  transition-all duration-150 delay-100 
                  hover:animate-pulse"
                >
                  <a
                    className="block dark:bg-white bg-white p-1 rounded-full"
                    href="#"
                  >
                    <img
                      className="w-16 rounded-full"
                      src="https://media.discordapp.net/attachments/896975702170173491/920138740201050183/19-12185-289.jpg"
                    />
                  </a>
                </div>
                <span className="story-text text-black dark:text-white">
                  Gutierrez
                </span>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <div
                  className="story-ring flex justify-center items-center
                  bg-gradient-to-tl from-green-200 to-green-500 
                  rounded-full relative cursor-pointer
                  hover:from-green-400 hover:to-green-600
                  transition-all duration-150 delay-100 
                  hover:animate-pulse"
                >
                  <a
                    className="block dark:bg-white bg-white p-1 rounded-full"
                    href="#"
                  >
                    <img
                      className="w-16 rounded-full"
                      src="https://media.discordapp.net/attachments/953565721143676951/978955346167078974/unknown.png"
                    />
                  </a>
                </div>
                <span className="story-text text-black dark:text-white">
                  Parco
                </span>
              </li>

              <li className="flex flex-col items-center space-y-2">
                <div
                  className="story-ring flex justify-center items-center
                  bg-gradient-to-tl from-green-300 to-green-500 
                  rounded-full relative cursor-pointer
                  hover:from-teal-200 hover:to-teal-400
                  transition-all duration-150 delay-100 
                  hover:animate-pulse"
                >
                  <a
                    className="block dark:bg-white bg-white p-1 rounded-full"
                    href="#"
                  >
                    <img
                      className="w-16 rounded-full"
                      src="https://media.discordapp.net/attachments/953565721143676951/978955657468346408/unknown.png"
                    />
                  </a>
                </div>

                <span className="story-text text-black dark:text-white">
                  Soliman
                </span>
              </li>

              <li className="flex flex-col items-center space-y-2">
                <div
                  className="story-ring flex justify-center items-center
                          bg-gradient-to-tl from-green-200 to-green-500 
                          rounded-full relative cursor-pointer
                          hover:from-green-400 hover:to-green-600
                          transition-all duration-150 delay-100 
                          hover:animate-pulse"
                >
                  <a
                    className="block dark:bg-white bg-white p-1 rounded-full"
                    href="#"
                  >
                    <img
                      className="w-16 rounded-full"
                      src="https://media.discordapp.net/attachments/953565721143676951/978954895669485578/unknown.png"
                    />
                  </a>
                </div>

                <span className="story-text text-black dark:text-white">
                  Gomez
                </span>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <div
                  className="story-ring flex justify-center items-center
                          bg-gradient-to-tl from-green-200 to-green-500 
                          rounded-full relative cursor-pointer
                          hover:from-green-400 hover:to-green-600
                          transition-all duration-150 delay-100 
                          hover:animate-pulse"
                >
                  <a
                    className="block dark:bg-white bg-white p-1 rounded-full"
                    href="#"
                  >
                    <img
                      className="w-16 rounded-full"
                      src="https://media.discordapp.net/attachments/953565721143676951/978955681975636028/unknown.png"
                    />
                  </a>
                </div>

                <span className="story-text text-black dark:text-white">
                  Dayao
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
