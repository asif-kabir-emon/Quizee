import React from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./QuizQuestion.css";

const QuizQuestion = ({ quizQuestion }) => {
  const { question, options, id, correctAnswer } = quizQuestion;
  const parse = require("html-react-parser");
  const answerNotifier = () => toast(correctAnswer);
  const correcAnswerNotifier = () => toast.success("The answer is Correct.");
  const wrongAnswerNotifier = () => toast.success("The anser is Wrong !!!");

  return (
    <div className="flex justify-center my-5">
      <div className="bg-slate-200 p-6 rounded-md quiz-question-option m-4">
        <div className="flex justify-between items-center">
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
                    ? { correcAnswerNotifier }
                    : { wrongAnswerNotifier }
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
