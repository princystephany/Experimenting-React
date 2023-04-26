import React from 'react'

 function Card(props) {
  
  const {brandname, brandprice}=props
    return (
     <>
  <div className="card" style={{width: "18rem"}}>
  <img src="{brandimage}" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{ brandname}</h5>
    <p className="card-text">Some </p>
    <a href="" className="btn btn-primary">Go somewhere</a>
    <p>{brandprice}</p>
  </div>
</div>
 
      </>  
    );
  }
   export default Card;
 