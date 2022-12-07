import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FormStyled } from "../assets/Global";
import { addQuestion } from "../store/reducers/createQuestion";
import List from "./List";

const ListForm = ({ id, title, questions }) => {
  const [values, setValues] = useState();
  const dispatch = useDispatch();
  const newVariant = {
    title: values,
    id: Math.random().toString(),
    option: [],
    answerId: null,
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(values);
    setValues("");
    dispatch(addQuestion({ dataId: id, question: newVariant }));
  };
  return (
    <FormStyled onSubmit={onSubmitHandler}>
      <div>
        <h1 className="container">
          Theme:{title}
          <p className="grid">
            <input
              className="write"
              type="text"
              placeholder="Напишите вопрос.."
              value={values}
              onChange={(e) => setValues(e.target.value)}
            />
            <button className="click" type="submit">
              Добавить
            </button>
          </p>
        </h1>

        <List questions={questions} dataId={id} />
      </div>
    </FormStyled>
  );
};

export default ListForm;
