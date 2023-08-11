import "./App.css";
import Dashboard from "./component/Dashboard/app";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import Appraisal from "./component/Dashboard/pages/Appraisal";
// import react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/appraisal",
    element: <Appraisal />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      {/* <Login /> */}
    </div>
  );
}

export default App;
