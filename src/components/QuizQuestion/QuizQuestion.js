import React from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuizQuestion = ({ quizQuestion, index }) => {
  const { question, options, id, correctAnswer } = quizQuestion;
  const parse = require("html-react-parser");
  const answerNotifier = () => toast(`Answer: ${correctAnswer}`);
  const correcAnswerNotifier = () => toast.success("Your answer is Correct.");
  const wrongAnswerNotifier = () => toast.error("Your answer is Wrong !!!");

  return (
    <div className="flex justify-center my-5">
      <div className="bg-slate-200 p-6 rounded-md md:w-3/4 lg:w-1/2 m-4 ">
        <div className="text-left">
          <span className=" bg-red-600 text-white px-2 py-1">
            Question - {index + 1}
          </span>
        </div>
        <div className="flex justify-between tems-center">
          <div className="text-base md:text-2xl my-3 text-left md:text-center">
            {parse(question)}
          </div>
          <div>
            <button onClick={answerNotifier}>
              <EyeIcon className="w-7 h-7 ml-10 text-slate-600"></EyeIcon>
              <ToastContainer />
            </button>
          </div>
        </div>
        <div className="text-left">
          {options.map((option) => (
            <div className="border-2 text-xs md:text-lg bg-slate-400 px-2 py-1 my-1 rounded">
              <input
                type="radio"
                name={id}
                value={option}
                className="mr-2"
                onClick={() =>
                  correctAnswer === option
                    ? correcAnswerNotifier()
                    : wrongAnswerNotifier()
                }
              />
              {option}
              <ToastContainer />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
