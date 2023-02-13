import './App.css';
import img from "./images/myImage.jpg";
import RightContent from './RightContent';
import React , {useState} from "react" ;
import Forms from "./Forms" ;

function App() {
  

  return (
    <div class = "container">
      <div class = "heading">
          <img className = "sideImage" src ={img} alt ="Side display" />
          <RightContent />
          
      </div>
      
    </div>
  );
}

export default App;
