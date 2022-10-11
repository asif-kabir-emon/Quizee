import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Header from "./components/Header/Header";
import Quiz from "./components/Quiz/Quiz";
import Statistics from "./components/Statistics/Statistics";
import Topics from "./components/Topics/Topics";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header></Header>,
      children: [
        {
          path: "/",
          loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
          element: <Topics></Topics>,
        },
        {
          path: "/topics",
          loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
          element: <Topics></Topics>,
        },
        {
          path: "/statistcs",
          loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
          element: <Statistics></Statistics>,
        },
        { path: "/blog", element: <Blog></Blog> },
        {
          path: "/quizTopic/:topic",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.topic}`
            );
          },
          element: <Quiz></Quiz>,
        },
      ],
    },
    { path: "*", element: <ErrorPage></ErrorPage> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
