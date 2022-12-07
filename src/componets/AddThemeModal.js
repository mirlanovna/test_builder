import React, { useReducer } from "react";
import { AddListModalStyled } from "../assets/Global";
import { initialState, stateReducer } from "../utils/reducer";
import { useDispatch } from "react-redux";
import { addData } from "../store/reducers/createQuestion";
import { useNavigate } from "react-router-dom";

const AddThemeModal = () => {
  const [value, dispatchValue] = useReducer(stateReducer, initialState);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const changeValueHandler = (type) => {
    return (e) => dispatchValue({ type, payload: e.target.value });
  };

  const addDataHandler = () => {
    dispatch(
      addData({
        id: Math.random().toString(),
        title: value.value,
        questions: [],
      })
    );
    navigate(`/tests/${value.value.toLowerCase()}`);
    dispatchValue({ type: "RESET" });
  };

  return (
    <AddListModalStyled>
      <div className="add_list_modal_header">Названия тема</div>
      <div className="Input">
        <input
          className="input"
          type="text"
          placeholder="Введите тема"
          value={value.value}
          onChange={changeValueHandler("TITLE")}
        />
        <button className="Btn" onClick={addDataHandler}>
          Add
        </button>
      </div>
    </AddListModalStyled>
  );
};

export default AddThemeModal;
