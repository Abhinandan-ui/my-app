import React,{useState} from 'react';

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';


import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode , setMode] = useState('light');
  const [alert,setAlert] =useState(null);
  
  const   showAlert=(message , type)=>{
   setAlert({
    msg: message,
    type : type
   })
   setTimeout(() => {
     setAlert(null);
   }, 1500); 
  }

  
 const toogleMode =() =>{
  if(mode === 'light'){
  setMode('dark');
 document.body.style.backgroundColor ='rgb(3 13 20)';
 showAlert("Dark Mode has been enabled","success")
  }
  else {
    setMode('light');
    document.body.style.backgroundColor ='white';
    showAlert("Light Mode has been enabled","success")
  }
 }
 return (
<>
<Navbar title ="TextUtils" mode = {mode} AboutText="About "   toogleMode={toogleMode} />

  <Alert alert = {alert}/>
  <div className="container my-3">
    

          <TextForm  showAlert={showAlert} heading ="Enter the text to analyse" mode={mode}/>
      
  </div>
 

</>
  );
}

export default App;
