import React from "react";
import { useNavigate } from "react-router-dom";

const CardItem = ({ id, title }) => {
  const naviagte = useNavigate();

  const submithadnler = () => {
    naviagte(`/tests/${title}`);
  };

  return (
    <div className="Card" key={id}>
      <h1 className="CARD">
        Тест по:<span>{title}</span>
      </h1>
      <button className="Button" onClick={submithadnler} type="button">
        Пройти тест
      </button>
    </div>
  );
};

export default CardItem;
