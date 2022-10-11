import React from "react";

const PageHeader = ({ quizTopic }) => {
  const { id, name, logo } = quizTopic;
  return (
    <div className="border-2  flex justify-center rounded-md w-72">
      <div className="text-left p-3 ">
        <img src={logo} alt="" className="w-64 h-60  bg-slate-200 rounded-md" />
        <p className="text-lg mt-2">{name}</p>
      </div>
    </div>
  );
};

export default PageHeader;
