import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Header from "./components/Header/Header";
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
        { path: "/blog", element: <Blog></Blog> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
