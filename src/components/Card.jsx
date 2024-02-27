import React from "react";

function Card(props) {
  return (
    <div className=" card">
     
        <img className="img" src={props.imgURL} />
      
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <a href= {props.link}>View</a>
    </div>
  );
}
export default Card;
