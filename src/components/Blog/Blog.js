import React from "react";

const Blog = () => {
  return (
    <div className="blogs-container text-left p-3 md:p-14">
      <div className="blog-container bg-gray-300 rounded-md my-4">
        <h3 className="text-2xl font-bold bg-gray-400 m-0 rounded-t-md px-3 py-2">
          What is the purpose of React Router?
        </h3>
        <p className="px-3 py-5">
          React Router is a standard library for routing in React. It enables
          the navigation among views of various components in a React
          Application, allows changing the browser URL, and keeps the UI in sync
          with the URL.
        </p>
      </div>
      <div className="blog-container bg-gray-300 rounded-md my-4">
        <h3 className="text-2xl font-bold bg-gray-400 m-0 rounded-t-md px-3 py-2">
          How does context api work in react?
        </h3>
        <p className="px-3 py-5">
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on. Context is also touted as an easier, lighter approach to
          state management using Redux.
        </p>
      </div>
      <div className="blog-container bg-gray-300 rounded-md my-4">
        <h3 className="text-2xl font-bold bg-gray-400 m-0 rounded-t-md px-3 py-2">
          What is useRef in react?
        </h3>
        <p className="px-3 py-5">
          useRef is like a “box” that can hold a mutable value in its .current
          property. You might be familiar with refs primarily as a way to access
          the DOM. If you pass a ref object to React with &lt;div ref={"myRef"}
          /&gt; , React will set its .current property to the corresponding DOM
          node whenever that node changes.
        </p>
      </div>
    </div>
  );
};

export default Blog;
