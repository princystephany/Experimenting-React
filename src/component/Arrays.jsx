import React from 'react'

import {useState} from "react";


 function Arrays() {
  

    const [data, setData] = useState([])
    const items = ["dhoni", "kohli", "Rohit", "Rishab"] 
    
    const addPlayers = () => {
        setData(items);
    };

    const addOnePlayer = () => {
        const bowler = ["natrajan"];
        setData([...data, bowler]);
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
   <button  onClick={addOnePlayer}>Add One more Players
   </button>

      </>  
    );
  }
   export default Arrays;
 