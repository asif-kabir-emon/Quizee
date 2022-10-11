import React from "react";
import { useLoaderData } from "react-router-dom";
import Quizes from "../Quizes/Quizes";
import TopicHeader from "../TopicHeader/TopicHeader";

const Topics = () => {
  const data = useLoaderData();
  const quizTopics = data.data;
  console.log(quizTopics);
  return (
    <div>
      <div>
        <TopicHeader></TopicHeader>
      </div>
      <div className="flex justify-center my-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {quizTopics.map((quizTopic) => (
            <Quizes quizTopic={quizTopic} key={quizTopic.id}></Quizes>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topics;
