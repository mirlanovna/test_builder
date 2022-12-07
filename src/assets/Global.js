import styled from "styled-components";

export const HeaderStyled = styled.header`
  & {
    width: 100%;
    background-color: rgba(166, 227, 202);
    padding: 5px;
  }
  &:hover {
  }
  & .header_wrapper {
  }
  & .header_taps {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10%;
    padding: 10px;
  }
  & .header_taps a {
    text-decoration: none;
    color: whitesmoke;
  }
  & .header_taps .active {
    color: red;
  }
`;

export const Container = styled.div`
  & {
    max-width: 1240px;
    margin: 0 auto;
  }
  & .cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    padding: 1rem;
  }
  & .Card {
    width: 95%;
    height: 5rem;
    background-color: pink;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.5) 0 1px 2px;
  }
  & .CARD {
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: capitalize;
    letter-spacing: 0.5px;
  }
  & .CARD span {
    color: green;
  }
  & .Button {
    width: 50%;
    padding: 5px;
    justify-self: flex-end;
    align-self: flex-end;
  }
`;

export const HomepageStyled = styled.div`
  & {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 3rem;
    z-index: -1;
  }
  & .btn {
    border-radius: 5px;
    border: 1px solid;
    font-size: 1.4rem;
    padding: 10px;
    position: relative;
    cursor: pointer;
    transition: box-shadow 0.5s;
    &:hover {
      box-shadow: rgb(0, 0, 0, 0.5) 0px 1px 3px;
    }
  }
  & .show_modal {
    position: relative;
  }
`;
export const AddListModalStyled = styled.div`
  & {
    width: 250px;
    height: 350px;
    background: linear-gradient(
      90deg,
      rgba(223, 227, 214, 1) 35%,
      rgba(217, 223, 206, 1) 100%
    );
    position: absolute;
    right: 90%;
    bottom: 60%;
    z-index: 10;
    border-radius: 5px;
  }
  & .add_list_modal_header {
    height: 15%;
    background: linear-gradient(
      90deg,
      rgba(122, 96, 175, 1) 35%,
      rgba(169, 162, 207, 1) 100%
    );
    border-radius: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .Input {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30%;
    flex-direction: column;
    gap: 10px;
  }
  & .input {
    width: 90%;
    padding: 0 5px;
    height: 40px;
    border-radius: 3px;
    border: 1px;
    outline: none;
  }
  & .Btn {
    width: 90%;
    height: 30px;
    border: 1px solid #ccc;
    box-shadow: rgba(0, 0, 0, 0.5) 0 1px 2px;
    border-radius: 3px;
  }
`;
export const ListItemStyled = styled.div`
  width: 50%;
  padding: 1rem;
  background-color: rgba(240, 244, 247);
  border: 1px solid;
  margin: auto;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.4) 0 1px 2px;
  border-bottom: 1px solid;

  & .lists {
    display: flex;
    justify-content: space-between;
  }
  & .question {
    border-bottom: 1px solid;
    padding: 1rem;
  }
  & .form {
    padding: 1rem;
  }
  & .variant {
    width: 100%;
    height: 25px;
    border: 2px solid black;
    margin: 8px;
    display: flex;
    justify-content: space-between;
  }
`;

export const ListStyled = styled.div`
  & {
    display: flex;
    flex-direction: column;
    width: 90%;
    background: rgba(210, 223, 255);
    margin: auto;
    gap: 1rem;
    padding: 1rem;
  }
`;
export const FormStyled = styled.form`
  & .container {
    display: grid;
    align-items: center;
    justify-content: center;
    padding: 4px;
  }
  & .grid {
    display: flex;
    justify-content: space-between;
  }
  & .write {
    width: 220px;
    height: 40px;
    position: relative;
    right: 60px;
    font-size: 1.1rem;
    font-weight: 500;
  }
  & .click {
    width: 90px;
    font-size: 1rem;
    position: relative;
    right: 55px;
  }
`;
