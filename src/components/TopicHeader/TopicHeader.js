import React from "react";
import "./TopicHeader.css";

const TopicHeader = () => {
  return (
    <div className="bg-slate-50 py-7">
      <div className="topic-header flex justify-center border-0 mx-auto">
        <img
          src="https://static.vecteezy.com/system/resources/previews/007/343/548/original/memphis-style-yellow-quiz-time-banner-design-for-promotion-vector.jpg"
          alt=""
        />
      </div>
      <p className="text-5xl my-5">Select Your Topic</p>
    </div>
  );
};

export default TopicHeader;
