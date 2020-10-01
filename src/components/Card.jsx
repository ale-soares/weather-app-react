import React from "react";

const Card = ({ icon, temperature, ...props }) => {
  return (
    <div className="card">
      <img
        className="image"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="Minha Figura"
      />
      <p className="temperature">{temperature} ºC</p>
    </div>
  );
};

export default Card;
