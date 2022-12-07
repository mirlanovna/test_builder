import React from "react";
import ListItem from "./ListItem";
// import { useSelector } from "react-redux";
import { ListStyled } from "../assets/Global";

const List = ({questions, dataId}) => {
  return (
    <ListStyled>
      {questions?.map((list) => (
        <ListItem {...list} dataId={dataId} answerId={list.answerId} />
      ))}
    </ListStyled>
  );
};

export default List;
