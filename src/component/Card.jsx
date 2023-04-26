import React from 'react'

 function Card(props) {
  
    return (
     <>
  <div className="card" style={{width: "18rem"}}>
  <img src="{props.brandimage}" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.brandname}</h5>
    <p className="card-text">Some </p>
    <a href="" className="btn btn-primary">Go somewhere</a>
    <p>{props.brandprice}</p>
  </div>
</div>
 
      </>  
    );
  }
   export default Card;
 