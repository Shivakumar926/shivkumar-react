// import logo from './Login_Image.PNG';

import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

function App() {

  return (
    <div className='App'>
      <container>
        <img src="Login_Image.jpg" alt="girl with tab" className="girlimage"></img>
        <div className="pages">
          <div className="app">
          <h2>Sign Up</h2>
          <form>
            <div className="mb-3 page ">
              <label>Full Name</label>
              <input type="text" className="form-control text1" id="exampleInputEmail1" placeholder="Name"/>
            </div>
            <div className="mb-3 page">
              <label>Email</label>
              <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Email address" />
            </div>
            <div className="mb-3">
              <label>Username</label>
              <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Username" />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="mb-3">
              <label>Repeat Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Repeat Password" />
            </div>
            <div>
              <input type="checkbox" /> I agree to the Terms of User.
            </div>
            <div>
              <button type="submit" className="btn1">SignUp</button>
              <span className='FOR'><a href='SignIn'>SignIn</a></span>
              <img src="arrow_right.png" alt="rightarrowicon" height="20px" width="20px"/>
             
            </div>

          </form>

          </div>
        </div>
      </container>
    </div>

  );
}
export default App;
