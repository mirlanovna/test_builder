import { configureStore } from "@reduxjs/toolkit";
import createQuestion from "./reducers/createQuestion";
import modalSlice from "./reducers/modalSlice";
import listSlice from "./reducers/listSlice";

export default configureStore({
  reducer: {
    modal: modalSlice,
    data: createQuestion,
    lists: listSlice,
  },
});
