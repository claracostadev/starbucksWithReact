import React from "react";

const Card = (props) => {
  return (
    <div className="cards__card">
      <img className="cards__card-img" src={props.src} alt="card" />
      <div className="cards__container-text">
        <h2 className="cards__card-title">
          {props.title + " "}
          <span className="cards__card-title--yellow">Starburks</span>
        </h2>
        <p className="cards__card-description">{props.description}</p>
        <br />
        <input className="cards__card-btn" type="button" value="Pruebelo" />
      </div>
      {props.circle_estado ? <div className="cards__circle">{props.circle}</div> : null}
    </div>
  );
};

export default Card;
