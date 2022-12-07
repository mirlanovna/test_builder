import React from "react";
import {
  AddListModalStyled,
  Container,
  HomepageStyled,
} from "../assets/Global";
import Header from "../layouts/Header";
import { FiPlus } from "react-icons/fi";

import { showAddModal } from "../store/reducers/modalSlice";
import { useSelector, useDispatch } from "react-redux";
import AddThemeModal from "../componets/AddThemeModal";
import { useNavigate } from "react-router-dom";
import Card from "../componets/Card";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    modal: { addModal },
    data: { data },
  } = useSelector((state) => state);

  const showAddModalHandler = (e) => {
    e.preventDefault();
    dispatch(showAddModal());
  };

  return (
    <div>
      <Header />
      <Card />
      <HomepageStyled>
        <form className="show_modal" onSubmit={showAddModalHandler}>
          {addModal && <AddThemeModal />}
          <button className="btn" type="submit">
            <FiPlus /> Добавить тест
          </button>
        </form>
      </HomepageStyled>
    </div>
  );
};

export default Home;
