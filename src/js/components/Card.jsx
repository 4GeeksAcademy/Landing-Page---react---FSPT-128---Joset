import React from "react";

const Card = (props) => {
  const { imagen, titulo, texto} = props.cards;
  return (
    <div className="card bg-dark text-danger card-uniform" style={{ width: "18rem" }}>
      <img
        src={imagen}
        className="card-img-top"
        alt="Upside Down"
      />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">
          {texto}
        </p>
        <a href="#" className="btn btn-outline-danger btn-sm">
          Abrir expediente
        </a>
      </div>
    </div>
  );
};

export default Card;