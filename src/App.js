import React, { useState } from 'react'
import axios from 'axios';
import './App.css'
function App() {
  const [authoy ,setouthy]=useState("");
  const [quot ,setquot]=useState("");
  const handleclick=()=>{
   axios.get('https://api.quotable.io/random').then((res)=>{
    // console.log(res);
    setouthy(res.data.author);
    setquot(res.data.content);
   })
  }
  return (
   
    <div className='quote-box'>
      <div className='quote-text'>
        <p>{quot}
        </p>
      </div>
      <div className='quote-author'>
        <h3> {authoy}</h3>
      </div>
      <div className='quote-button'>
        <button onClick={handleclick}>Button </button>
      </div>

    </div>
    
  )
}

export default App
