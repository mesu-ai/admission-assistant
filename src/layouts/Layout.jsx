import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from '../routes/Routes';
import Header from './header/Header';


const Layout = () => {
  return (
    <BrowserRouter>
    <Header/>
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

export default Layout;