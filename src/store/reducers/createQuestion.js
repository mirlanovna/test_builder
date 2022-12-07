import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const createQuestion = createSlice({
  name: "question",
  initialState,
  reducers: {
    addData(state, { payload }) {
      console.log(payload, "addData");
      state.data.push(payload);
    },
    addQuestion(state, { payload }) {
      console.log("====================================");
      console.log(payload);
      console.log("====================================");
      const newQuestion = state.data.find(
        (question) => question.id === payload.dataId
      );
      newQuestion.questions.push(payload.question);
    },
    editQuestion(state, { payload }) {
      let newItem = state.data.find((el) => el.id === payload.dataId);
      let newQuestion = newItem.questions.find(
        (item) => item.id === payload.id
      );
      newQuestion.title = payload.newTitle;
    },
    addOptions(state, { payload }) {
      let newItem = state.data.find((el) => el.id === payload.dataId);
      let newQuestion = newItem.questions.find(
        (item) => item.id === payload.id
      );
      newQuestion.option.push(payload.newOption);
    },
    deleteVariants(state, { payload: { dataId, id, questionId } }) {
      const searchItem = state.data.find((item) => item.id === dataId);
      const wanted = searchItem.questions.find(
        (item) => item.id === questionId
      );
      wanted.option = wanted.option.filter((el) => el.id !== id);
    },
    // removeTests(state, actions) {
    //   return state.data.filter((item) => item.id !== actions.payload);
    // },
    removeQuestions({ data }, { payload: { dataId, id } }) {
      console.log(id);
      console.log(dataId);
      const filteredDataID = data.find((item) => item.id === dataId);
      filteredDataID.questions = filteredDataID.questions.filter(
        (item) => item.id !== id
      );
    },
    checkedTest(state, action) {
      const { mainId, id } = action.payload;

      const findId = state.data.find((item) => item.id === id);
      findId.answerId = mainId;
    },
  },
});
export const {
  addData,
  addQuestion,
  editQuestion,
  checkedTest,
  addOptions,
  deleteVariants,
  removeQuestions,
} = createQuestion.actions;
export default createQuestion.reducer;
