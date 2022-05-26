import React, { useState, useEffect } from "react";

import { AiOutlineArrowRight } from "react-icons/ai";
import { useDropzone } from "react-dropzone";
import { BsFillFileEarmarkMusicFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Sound = () => {
  const [soundClassifier, setSoundClassifier] = useState({
    Classical: 0.5,
    Blues: 0.5,
    Country: 0.5,
    Disco: 0.5,
    Hiphop: 0.5,
    Jazz: 0.5,
    Metal: 0.5,
    Pop: 0.5,
    Reggae: 0.5,
    Rock: 0.5,
  });
  useEffect(() => {
    sortGenre(soundClassifier);
  }, []);
  const sortGenre = (data) => {
    const sorted_genre = Object.entries(data)
      .sort(([, b], [, a]) => a - b)
      .reduce((r, [k, v]) => ({ ...r, [k]: v <= 1 ? v * 100 : v }), {});
    setSoundClassifier(sorted_genre);
  };
  const [fileName, setFileName] = useState("");
  const [soundFile, setSoundFile] = useState();
  const { getRootProps, getInputProps } = useDropzone({
    accept: "audio/*",
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file["type"].includes("audio")) {
        setFileName(file.name);
        setSoundFile(file);
      } else {
        toast.error("Not an audio file");
      }
    },
  });

  const uploadFile = async (event) => {
    if (soundFile) {
      var bodyFormData = new FormData();
      bodyFormData.append("sound_file", soundFile);
      await axios({
        method: "POST",
        url: "http://127.0.0.1:5000/classify-music-genre",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function async(response) {
          //handle success
          const data = response.data;

          sortGenre(response.data);
        })
        .catch(function async(response) {
          //handle error
          console.log(response);
        });
    } else {
      toast("File is missing");
      console.log("helo");
    }
  };
  return (
    <div>
      <ToastContainer />
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
        <div className="mt-8 space-y-3 sm:max-w-lg w-full p-10 dark:bg-gray-800 rounded-xl z-10">
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-400 dark:text-gray-200 tracking-wide">
              Attach Document
            </label>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col rounded-lg border-4  shim-teal border-dashed w-full h-60 p-10 group text-center border-teal-400">
                  <div className="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                    <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                      <img
                        className="has-mask w-96 object-center "
                        src="https://media.discordapp.net/attachments/953565721143676951/978963963930886164/pngwing.com_1.png?width=857&height=701"
                        alt="freepik image"
                      />
                    </div>

                    <div className="pointer-none text-black dark:text-white ">
                      {fileName == "" ? (
                        <>
                          <span className="text-sm">Drag and drop </span>
                          <br /> or{" "}
                        </>
                      ) : (
                        <div className="abolute right-5 flex justify-evenly items-center space-x-3">
                          <BsFillFileEarmarkMusicFill className="text-teal-800 dark:text-teal-400 w-5 h-5" />
                          <span className="pointer-none text-black dark:text-white ">
                            {fileName}
                          </span>
                          <br />
                        </div>
                      )}
                      <p className="text-teal-600 hover:underline">
                        select a file{" "}
                      </p>
                      from your computer
                    </div>
                  </div>
                  <input type="file" className="hidden" />
                </label>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-400 dark:text-gray-400 my-10">
            <span>File type: wav, mp3,types of sound file</span>
          </p>
          <div>
            <button
              type="submit"
              className="my-5 w-full flex justify-center bg-teal-400 text-gray-100 p-4  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-teal-600 shadow-lg cursor-pointer transition ease-in duration-300"
              onClick={(e) => uploadFile(e)}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-full max-w-md p-10 mx-auto">
        {Object.keys(soundClassifier).map((value, index) => {
          return (
            <div key={index}>
              <ProgpressBar
                index={index}
                progress={soundClassifier[value]}
                genre={value}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ProgpressBar = ({ progress, genre, index }) => {
  if (index == 0) {
    return (
      <div className="text-left text-teal-400 font-medium dark:text-white">
        {genre}

        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
          <div
            className="bg-teal-300 shadow-xl  shim-teal shadow-teal-600/50 text-xs font-medium text-teal-700 text-center mb-3 p-2 leading-none rounded-full"
            style={{ width: `${progress}%` }}
          >
            {progress}%
          </div>
        </div>
      </div>
    );
  }
  if (progress <= 25) {
    return (
      <div className="text-left text-teal-400 font-medium dark:text-white">
        {genre}

        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
          <div
            className="bg-teal-600 text-xs shim-teal font-medium text-teal-700 text-center mb-3 p-2 leading-none rounded-full"
            style={{ width: `${progress}%` }}
          >
            {progress}%
          </div>
        </div>
      </div>
    );
  }
  if (progress <= 50) {
    return (
      <div className="text-left text-teal-400 font-medium dark:text-white">
        {genre}

        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
          <div
            className="bg-teal-500 text-xs shim-teal font-medium text-teal-700 text-center mb-3 p-2 leading-none rounded-full"
            style={{ width: `${progress}%` }}
          >
            {progress}%
          </div>
        </div>
      </div>
    );
  }
  if (progress < 100) {
    return (
      <div className="text-left text-teal-400 font-medium dark:text-white">
        {genre}

        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
          <div
            className="bg-teal-300 text-xs shim-teal font-medium text-teal-700 text-center mb-3 p-2 leading-none rounded-full"
            style={{ width: `${progress}%` }}
          >
            {progress}%
          </div>
        </div>
      </div>
    );
  }
  if (progress <= 75) {
    return (
      <div className="text-left text-teal-400 font-medium dark:text-white">
        {genre}

        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
          <div
            className="bg-teal-400 text-xs font-medium text-teal-700 text-center mb-3 p-2 leading-none rounded-full"
            style={{ width: `${progress}%` }}
          >
            {progress}%
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="text-left text-teal-400 font-medium dark:text-white">
      {genre}

      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className="bg-teal-400 text-xs font-medium text-teal-700 text-center mb-3 p-2 leading-none rounded-full"
          style={{ width: `${progress}%` }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
};
export default Sound;
