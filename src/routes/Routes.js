import SignIn from "../pages/SignIn/SignIn";




import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const SignUp = lazy(() => import('../pages/Signup/Signup'));
const ResetPassword = lazy(() => import('../pages/ResetPassword/ResetPassword'));
const NewPassword = lazy(() => import('../pages/NewPassword/NewPassword'));
const OneTimePassword = lazy(() => import('../pages/Otp/Otp'));


export const routes = [
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
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes &&
            routes.map((route) => (
              <Route key={route?.name} path={route?.path} element={<route.component />}></Route>
            ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routers;
