import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListItemStyled } from "../assets/Global";
import { addOptions, editQuestion } from "../store/reducers/createQuestion";
import { removeQuestions } from "../store/reducers/createQuestion";
import { deleteVariants } from "../store/reducers/createQuestion";
import { checkedTest } from "../store/reducers/createQuestion";
const ListItem = ({ id, title, dataId, option, answerId }) => {
  const dispatch = useDispatch();

  const [newTitle, setNewTitle] = useState(title);
  const [showField, setShowField] = useState(true);
  const [optionValue, setOption] = useState("");

  const editClickHandler = () => {
    dispatch(editQuestion({ id, newTitle, dataId }));
    showFieldHandler();
  };

  const removeQuestionHandler = () => {
    dispatch(removeQuestions({ dataId, id }));
  };

  const showFieldHandler = () => {
    setShowField((prevState) => !prevState);
  };

  const addOptionHandler = () => {
    dispatch(
      addOptions({
        id,
        newOption: { title: optionValue, id: Math.random().toString() },
        dataId,
      })
    );
    setOption("");
  };
  const toggleHandler = (mainId) => {
    dispatch(checkedTest({ id, mainId }));
  };

  return (
    <div>
      <ListItemStyled>
        <div className="question">
          {showField ? (
            <div className="lists">
              {title}
              <p>
                <button type="button" onClick={showFieldHandler}>
                  edit
                </button>
                <button type="button" onClick={removeQuestionHandler}>
                  X
                </button>
              </p>
            </div>
          ) : (
            <>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <button type="button" onClick={editClickHandler}>
                Save
              </button>
            </>
          )}
        </div>
        <div className="variants">
          {option.map((item) => (
            <div className="variant">
              <input
                type="checkbox"
                style={item.id === answerId ? { color: "red" } : {}}
                onChange={() => toggleHandler(item.id)}
              />
              {item.title}
              <div>
                <button
                  type="button"
                  onClick={() =>
                    dispatch(
                      deleteVariants({ dataId, questionId: id, id: item.id })
                    )
                  }
                >
                  удалить
                </button>
              </div>
            </div>
          ))}
          <div className="form">
            <input
              type="text"
              placeholder="Напишите варианты.."
              value={optionValue}
              onChange={(e) => setOption(e.target.value)}
            />

            <button type="button" onClick={addOptionHandler}>
              Submit
            </button>
          </div>
        </div>
      </ListItemStyled>
    </div>
  );
};

export default ListItem;
