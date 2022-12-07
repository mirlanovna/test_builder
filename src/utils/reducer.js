export const initialState = {
  value: "",
};
export const stateReducer = (state, { type, payload }) => {
  if (type === "TITLE") {
    return {
      ...state,
      value: payload,
    };
  }
  if (type === "RESET") {
    return {
      ...state,
      value: '',
    };
  }
  return state;
};

