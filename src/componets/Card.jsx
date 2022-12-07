import React from "react";
import { useSelector } from "react-redux";
import { Container } from "../assets/Global";
import CardItem from "./CardItem";

const Card = () => {

  const {data} = useSelector((state) => state.data)
  return (
    <Container>
    <div className="cards">
      {data.map((item) => {
        return <CardItem key={item.id} {...item} />;
      })}
    </div>
    </Container>
  );
};

export default Card;
