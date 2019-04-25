import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img onClick={() => props.bigFunction(props.id)} 
        alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <h3><strong>Name:</strong> {props.name}</h3>
      </div>
      
    </div>
  );
}

export default FriendCard;
