import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Bills from "../pages/bills/Bills";
import Profile from "../pages/profile/Profile";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Privateroutes from "../Privateroutes/Privateroutes";
import UpdateUser from "../components/updateuser/UpdateUser";
import PageDetails from "../pages/bills/PageDetails";
import NotFound from "../components/not found/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <NotFound></NotFound>,
    children: [
      { index: true, Component: Home },
      {
        path: "bills",
        loader: async () => {
          return fetch("/billsInfo.json").then((res) => res.json());
        },
        element: (
          <Privateroutes>
            <Bills></Bills>
          </Privateroutes>
        ),
        hydrateFallbackElement: (
          <div>
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },
      {
        path: "profile",
        element: (
          <Privateroutes>
            <Profile></Profile>
          </Privateroutes>
        ),
      },
      { path: "register", Component: Register },
      { path: "login", Component: Login },
      {
        path: "updateprofileInfo",
        element: (
          <Privateroutes>
            <UpdateUser></UpdateUser>
          </Privateroutes>
        ),
      },
      {
        path: "pageDetails/:id",

        element: (
          <Privateroutes>
            {" "}
            <PageDetails></PageDetails>{" "}
          </Privateroutes>
        ),
      },
    ],
  },
]);
