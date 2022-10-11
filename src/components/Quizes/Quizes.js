import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const PageHeader = ({ quizTopic }) => {
  const { id, name, total, logo } = quizTopic;

  return (
    <div className="border-2  flex justify-center rounded-md w-72">
      <div className="text-left p-3 ">
        <img src={logo} alt="" className="w-64 h-60  bg-slate-200 rounded-md" />
        <div className="text-center my-2 text-lg  text-green-800 font-bold">
          <div>
            <span className="text-green-600">Quiz:</span> {total} Questions
          </div>
        </div>
        <div className="flex justify-between items-center mt-2 ">
          <p className="text-xl">{name}</p>
          <Link to={`/quiz/${id}`}>
            <button className="flex items-center bg-indigo-500 text-white text-sm font-bold px-3 py-1 rounded-lg">
              Start Practice
              <ArrowRightIcon className="h-4 w-4 ml-1"></ArrowRightIcon>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
