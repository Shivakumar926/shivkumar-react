import React from 'react';
import { Table } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import AppRoute from './Assessement/AppRoute';
import App from './App';
import SignIn from './SignIn';

const AppRoute = () => {
  return(
  <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<App/>}/>
      <Route path='/SignIn' element={<SignIn/>}/>
            
    </Routes>
  </BrowserRouter>
 );
}
export default AppRoute;
