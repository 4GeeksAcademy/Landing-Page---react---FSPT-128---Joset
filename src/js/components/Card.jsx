import React from "react";

const Card = () => {
  return (
    <div className="card bg-dark text-danger" style={{ width: "18rem" }}>
      <img
        src="https://wallpapers.com/images/high/demogorgon-stranger-things-enjkc4vl1rsxw2zu.webp"
        className="card-img-top"
        alt="Upside Down"
      />
      <div className="card-body">
        <h5 className="card-title">Caso: Demogorgon</h5>
        <p className="card-text">
          Actividad anómala detectada en Hawkins. Luces parpadeando, ruidos extraños y desapariciones misteriosas.
        </p>
        <a href="#" className="btn btn-outline-danger btn-sm">
          Abrir expediente
        </a>
      </div>
    </div>
  );
};

export default Card;