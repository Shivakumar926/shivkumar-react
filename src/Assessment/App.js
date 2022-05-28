// import logo from './Login_Image.PNG';

import React from 'react';
import './App.css';

function App() {

return (
<div className='App'>  
<main>
 <img src="Login_Image.jpg" alt="girl image" className="codexbox1"></img>
    <div className="pages">
    {/* <div className="app"> */}
    <h3>Sign Up</h3>
    <form>
    <div className="mb-3 page ">
    <input type="text" className="form-control text1" id="exampleInputEmail1" placeholder="Full Name"/>
    </div>
    <div className="mb-3 page">
    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Email" />
    </div>
    <div className="mb-3">
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="UserName"/>
    </div>
    <div className="mb-3">
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>     
    </div>
    <div className="mb-3">
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Repeat Password"/>
    </div>
    <div>
        <input type="checkbox"/> I agree to the Terms of User
    </div>
    <div>
    <button type="submit" className="btn1">SignUp</button>
    <span className='FOR'><a href='SignIn'>SignIn</a></span>
    </div>
    
    </form>
        
      {/* </div> */}
      </div>
    </main>
    </div>

  );
}

export default App;

