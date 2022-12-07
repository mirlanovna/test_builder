import { createSlice } from "@reduxjs/toolkit";

const listSLice = createSlice({
  name: "lists",
  initialState: {
    lists: [],
  },
  reducers: {
    addList: (state, action) => {
      const newList = {
        id: Date.now(),
        title: action.payload.title,
      };
      state.lists.push(newList);
    },
    deleteList(state, action) {
      state.lists = state.lists.filter((el) => el.id !== action.payload);
    },

    editList(state, action) {
      state.lists.map((list) => {
        if (list.id === action.payload.id) {
          list.title = action.payload.newTitle;
        }
        return list;
      });
    },
  },
});
export const { addList, deleteList, editList } = listSLice.actions;
export default listSLice.reducer;
