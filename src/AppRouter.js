import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import App from "./App";
import ForgotPassword from "./components/ForgetPassword/ForgetPassword";
import Login from "./components/Login/Login";


const AppRouter = ()=>{
    return(
      <BrowserRouter>
      <Router>
          <Route path="/App" element={<App/>}/>
          <Router path="/Login" element={<Login/>}/>
          <Router path="/ForgotPassword" element={<ForgotPassword/>}/>
      </Router>
      </BrowserRouter>

    );
}
export default AppRouter;