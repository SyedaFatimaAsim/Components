import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FAInput from './Components/FAInput';
import FAButton from './Components/FAButton';
import FATable from './Components/FATable';

function App() {
  const[txt,setTxt] = useState("");
  var greet =()=>{
    {
      alert("Hello");
    }

  }
  
  return (
    <div className="App">
      <p>{txt}</p>
    <FAInput text="Enter your name" onChanged={(e:any)=>{
        setTxt(e.target.value);
       }}/>
    <FAButton btnValue="Click" functionName={greet}/>
    <FATable/>
    </div>
  );
}

export default App;
