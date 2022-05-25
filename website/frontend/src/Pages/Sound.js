import React from "react";

import { AiOutlineArrowRight } from "react-icons/ai";

const Sound = () => {
  return (
    <div>
      <div className="p-16 bg-teal-400 text-white space-y-4 text-center flex-none w-full flex flex-col items-center justify-center">
        <h2 className="text-4xl max-w-md text-center font-extrabold">
          MUSIC GENRE CLASSIFIER
        </h2>
        <p className="max-w-lg">
          An entry-level application that utilizes Deep Convolutional Neural
          Networks to categorize different types of musical genres.
        </p>
        <span
          className="rounded-full flex items-center text-gray-500 hover:text-gray-700 duration-300 dark:text-white"
          to="/sound"
        >
          <AiOutlineArrowRight className="w-5 h-5 order-1 mr-3 text-white" />
          <a
            href="https://docs.google.com/document/d/11yMDAARWavAzybHzouSqc58wtn9FKO-N-B5SSix7Lis/edit?usp=sharing"
            className="text-sm order-1 text-white"
            target="_blank"
            rel="research paper"
          >
            click see full research
          </a>
        </span>
      </div>
      <div className="w-full max-w-md px-7 py-10 mx-auto = rounded-2xl shadow-xl my-10">
        <form
          className="mt-8 space-y-3 sm:max-w-lg w-full p-10 bg-white dark:bg-gray-800 rounded-xl z-10"
          action="#"
          method="POST"
        >
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-400 dark:text-gray-200 tracking-wide">
              Attach Document
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center border-teal-400">
                <div className="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                  <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                    <img
                      className="has-mask w-96 object-center"
                      src="https://media.discordapp.net/attachments/953565721143676951/978963963930886164/pngwing.com_1.png?width=857&height=701"
                      alt="freepik image"
                    />
                  </div>
                  <p className="pointer-none text-black dark:text-white ">
                    <span className="text-sm">Drag and drop</span> files here{" "}
                    <br /> or{" "}
                    <a href="" id="" className="text-teal-600 hover:underline">
                      select a file
                    </a>{" "}
                    from your computer
                  </p>
                </div>
                <input type="file" className="hidden" />
              </label>
            </div>
          </div>
          <p className="text-sm text-gray-300 dark:text-gray-500 my-10">
            <span>File type: wav, mp3,types of sound file</span>
          </p>
          <div>
            <button
              type="submit"
              className="my-5 w-full flex justify-center bg-teal-400 text-gray-100 p-4  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-teal-600 shadow-lg cursor-pointer transition ease-in duration-300"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sound;
