import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizQuestion from "../QuizQuestion/QuizQuestion";

const Quiz = () => {
  const data = useLoaderData();
  const quizQuestions = data.data.questions;
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-10">
        Quiz of {data.data.name}
      </h1>
      {quizQuestions.map((quizQuestion) => (
        <QuizQuestion quizQuestion={quizQuestion}></QuizQuestion>
      ))}
    </div>
  );
};

export default Quiz;
