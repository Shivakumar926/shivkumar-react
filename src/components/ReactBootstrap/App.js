// import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className='App'>  
      <main>
      <img src="logo1.png" alt="codexbox-Q-logo" className="codexbox1"></img>
      <div className="pages">
      <div className="App">
        <img src="logo2.jpg" alt="codexbox-logo" className="codexbox"></img>
        <h6>Please enter your username or work email address</h6>
        <form>
          <div className="mb-3 page ">
            <div>
            
              <input type="email" className="form-control text1" id="exampleInputEmail1" placeholder="codexbox.                                                                keka.com"/> 
              {/* <input type="text" className="form-control text2" id="exampleInputEmail1" placeholder=".keka.com" /> */}
            </div>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email id" />

          </div>
          <div className="mb-3">

            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password'/>
          </div>
          <div className="mb-3 form-check">
          
          </div>
          <div>
          <button type="submit" className="btn1">Login</button>
          <span className='FOR'><a href="http://localhost:3001/login">Forgot password?</a></span>
          </div>
          <div>
          <img src="https://www.keka.com/static/images/logos/KekaLogoBlack.svg" alt="keka" className="keka"/>
          <img className="google-play" src="https://icons-for-free.com/download-icon-app+google+on+play+store+icon-1320161423910476271_512.png" alt="google-play" />
          {/* <imag src="" alt="app store" class="app-store"/> */}
          </div>
          
        </form>
        
      </div>
      </div>
    </main>
    </div>

  );
}

export default App;

