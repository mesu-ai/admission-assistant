import React from "react";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/Signup/Signup";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import NewPassword from "../pages/NewPassword/NewPassword";
import OneTimePassword from "../pages/Otp/Otp";
import { useTransition, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

export const routers = [
  {
    path: "/",
    exact: true,
    component: SignIn,
    name: "SignIn",
    protected: false,
  },
  {
    path: "/signup",
    exact: true,
    component: SignUp,
    name: "SignUp",
    protected: false,
  },
  {
    path: "/reset-password",
    exact: true,
    component: ResetPassword,
    name: "ResetPassword",
    protected: false,
  },
  {
    path: "/new-password",
    exact: true,
    component: NewPassword,
    name: "NewPassword",
    protected: false,
  },
  {
    path: "/one-time-password",
    exact: true,
    component: OneTimePassword,
    name: "OneTimePassword",
    protected: false,
  },
];

const Routers = () => {
  const [routerShow, setRouterShow] = useState(false);
  const [isPending, startTransition] = useTransition();

  startTransition(() => {
    setRouterShow(true);
  });

  return (
    <div>
      {isPending && <p>Loading...</p>}
      {routerShow && (
        <BrowserRouter>
          <Routers>{routers && routers.map((route) => <Route></Route>)}</Routers>
        </BrowserRouter>
      )}
    </div>
  );
};

export default Routers;
