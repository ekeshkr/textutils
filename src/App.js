import React,{ useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";

function App() {
  const [text,setText] = useState("Enable");
  const [mode,setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert =(message,type)=>{
     setAlert({
      msg: message,
      type: type
     })
     setTimeout(() => {
      setAlert(null)
     }, 1500);
  }
  const toggleMode=()=>{
    if(mode === 'light'){
       setMode('dark')
       setText('Disable');
       document.body.style.backgroundColor = '#081942';
       showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      setText('Enable');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" aboutText="About" mode={mode} text={text} toggleMode={toggleMode}/>
    {/* <Navbar/> */}
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Routes> */}
          {/* <Route path="/about" element={<About />}> */}
          {/* </Route> */}
          {/* <Route path="/"element={<Textform showAlert={showAlert} heading="Enter text to analyze" mode={mode} />}> */}
          {/* </Route> */}
    <Textform showAlert={showAlert} heading="Enter text to analyze" mode={mode} />
     {/* </Routes> */}
    </div>
    {/* <About/> */}
    {/* </Router> */}
    </>
  );
}

export default App;
    
