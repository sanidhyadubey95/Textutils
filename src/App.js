import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState('info-subtle');  //by previous set -> light mode
  const [alert, setalert] = useState(null);
  
  const [modetext, setmodetext] = useState('Dark Mode');
  const [mystyle, setmystyle] = useState({
    color: 'black',   //light mode onn
    backgroundColor: 'white',
    padding: '20px'
  });
  const [mystylebtn, setmystylebtn] = useState({
    color: 'black',                       //dark mode onn
    backgroundColor: 'white'
  });
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1000)
  }

  const togglemode = () => {
    if (mode === 'info-subtle') {        //onn the dark mode
      setmode('dark');
      setmodetext("Light Mode");
      // settextcolor("light");
      setmystyle({
        color: 'white',
        backgroundColor: '#242424f3',  //blackish shade
        border: '1px solid white',
        padding: '25px'
      })
      setmystylebtn({
        color: 'white',
        backgroundColor: '#6b6b6b'      //dark grey shade
      })
      showalert("Dark mode has enabled", "success")
      document.body.style.backgroundColor = "#042743";
    }

    else {                              //onn the light mode
      setmode('info-subtle');
      setmodetext("Dark Mode");
      // settextcolor("dark");
      setmystyle({
        color: 'black',
        backgroundColor: 'white',
        padding: '25px'
      })
      setmystylebtn({
        color: 'black',
        backgroundColor: 'white',
        border: '1px solid black'
      })
      showalert("Light mode has enabled", "success")
      document.body.style.backgroundColor = "white";
    }
  }

  return (
  <>
  <Router>
    
      
        <Navbar title="Textutils" input1="Home" input2="About Us" modes={mode} key={new Date()} togglemode={togglemode} modetext={modetext} />
        <Alert alert={alert} />
        
        <div className="container my-3">
        
        <Switch>

          <Route exact path="/about">
          <About modes={mode} mystyle={mystyle} mystylebtn={mystylebtn}/></Route>
          
          <Route exact path="/">
          <Textform modes={mode} showalert={showalert} /></Route>
          
        </Switch>
        
              
        </div>
      
    
    </Router>
    </>
    );
}

export default App;
