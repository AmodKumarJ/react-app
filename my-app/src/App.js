import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";  
function App() {
  const [mode, setMode] = useState('light');//wether tdark mode is enable or not
  const[alert,setAlert] = useState(null);
  const showAlert =(Message,type)=>{
    setAlert({
      msg : Message,
      typ: type,
    });
    setTimeout(()=>{
      setAlert(null);
    },1500)
  };

  const toggleMode = () =>{

      if(mode === 'light')
      {
        setMode('dark');
       document.body.style.backgroundColor = '#212525';
       showAlert("Dark Mode Has been Enabled","success");
      }
      else{
        setMode ('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode Has been Enabled","success");
      }
  }
  return (
  <>
  {/* <Router> */}
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
       <div className='container'>
        {/* <Switch>
          <Route exact path="/about"  >
            <About />
          </Route> */}
          {/* <Route exact path="/" > */}
            <TextForm heading="Enter the text to handle" mode={mode} showAlert={showAlert} />
          {/* </Route>
        </Switch> */}
      </div>
    {/* </Router> */}
  </>
  );
}

export default App;
  