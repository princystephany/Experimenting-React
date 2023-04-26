import React from 'react'

import {useState} from "react";


 function Arrays() {
  

    const [data, setData] = useState([])
    const items = ["dhoni", "kohli", "Rohit", "Rishab"] 
    
    const addPlayers = () => {
        setData(items);
    };
    return (
     <>
    <h2>User Data array</h2>
    <br></br>
    {data.length && data.map((items) =>{
        return <li>{items}</li>
    })}
   <button  onClick={addPlayers}>Add Players
   </button>

      </>  
    );
  }
   export default Arrays;
 