import React from "react";
import "./style.css";

function Title(props) {
  return ( 
  <div className="wrapperContainer">
        <h1 className="title">{props.children}</h1>
        <h2 className="score">Score:{props.score}</h2>
        <h3 className="Status">{props.status}</h3>

  </div>
  )



}

export default Title;
