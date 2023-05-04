import React from 'react'

import {useState} from "react";

let uid=0;

 function ArrayUseState() {
  const [todoName,setTodoName] = useState('');
  const [todoList,setTodoList] = useState([]);

const handleAdd = () =>{


//adding value in the array through the setmethod

//     let prev =[...todoList];
//     prev.push({

//         id:++uid,
//         name:todoName
//     });

//     setTodoList(prev);

// };

//Single line of the same process--->[storing previous value, adding new value]

setTodoList([...todoList,{id:++uid, name:todoName}])
};

 const handleDelete  = (idx, id) => {

    
//   let prev = [...todoList];
//   prev.splice(idx,1);
//   setTodoList(prev) ; 

//Sinle line using fliter logic.Filter basically gives another array inside which logic is given
setTodoList(todoList.filter((el) => el.id !== id));
 };


console.log(todoList);
 return (
     <>
   <h1>Use Array as State in React
   </h1>
<div className="ArrayUS">

    <h2>TODO Notes:</h2>
    <input type="text" value={todoName} onChange={(e) => setTodoName(e.target.value)}/>
    <button onClick={handleAdd}>Add</button>
    <ul>
        {todoList.map((el,i) => {
            return(

                <React.Fragment key={i}>
                    <li>{el.name}</li>
                    <button onClick={() => handleDelete(i, el.id)}>Delete</button>
                </React.Fragment>
            )

        })}
    </ul>
    </div>
      </>  
    );
  }
   export default ArrayUseState;

 