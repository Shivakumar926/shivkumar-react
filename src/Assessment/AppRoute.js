import React from 'react';
// import { Table } from 'react-bootstrap';
// import App from './Assessment/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import SignIn from './SignIn';
import Shiva from './Shiva';
const AppRoute = () => {
  return(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path='/Shiva' element={<Shiva/>}/>      
    </Routes>
  </BrowserRouter>
);
}
export default AppRoute;