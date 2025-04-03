import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import Solutions from "./components/Solutions";
import Overview from "./components/Overview";
import Services from "./components/Services";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <WelcomePage />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Login />
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <Signup />
        </>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <>
          <HomePage />
        </>
      ),
    },
    {
      path: "/solutions",
      element: (
        <>
          <Solutions />
        </>
      ),
    },
    {
      path: "/overview",
      element: (
        <>
          <Overview />
        </>
      ),
    },
    {
      path: "/services",
      element: (
        <>
          <Services/>
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
