const nameReducer = (state = "", action) => {
  switch (action.type) {
    case "NAME":
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};

export default nameReducer;
