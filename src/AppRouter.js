import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import Login from "./components/Login/Login";


const AppRouter = ()=>{
    return(
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/ForgetPassword" element={<ForgetPassword/>}/>
      </Routes>
      </BrowserRouter>

    );
}
export default AppRouter;