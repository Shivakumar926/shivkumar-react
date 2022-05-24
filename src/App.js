// import logo from './logo.svg';
import './App.css';

function App() {

  return(

    <main className="">
    <img src="logo1.png" alt="codexbox1 logo" className="codexbox1"></img>
    <div className="pages">
    <div className="App">
      <img src="https://codexbox.com/wp-content/uploads/2022/03/logo-1.png" alt="codexbox2 logo"     className="codexbox2"></img>
      <h6>Please enter your username or work email address</h6>
      <form>
        <div className="mb-3 page ">
        <div>
          <input type="email" className="form-control text1" id="exampleInputEmail1" placeholder="codexbox.keka.com "/>
        </div>
        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email id" />
        </div>
        
        <div className="mb-3">
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password'/>
        </div>
        <div className="mb-3 form-check"></div>
        <div>
         <button type="submit" className="btn1">Login</button><span>Forgot password?</span>
        </div>
        
        <div>
            <img src="https://www.keka.com/static/images/logos/KekaLogoBlack.svg" alt="keka" class="keka"/>
            <img src="https://icons-for-free.com/download-icon-app+google+on+play+store+icon-1320161423910476271_512.png" ait="google play" class="google-play"/>
            <imag src="https://p.kindpng.com/picc/s/162-1627753_app-store-icon-available-in-app-store-icon.png" alt="app store" class="app-store"/>
        </div>
        
      </form>
      </div>
    </div>
    </main>
  );
}

export default App;
