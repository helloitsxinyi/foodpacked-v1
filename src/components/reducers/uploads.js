var currformatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "SGD",
});

const uploadReducer = (state = [], action) => {
  switch (action.type) {
    case "UPLOAD":
      return [
        ...state,
        {
          // name: name,
          // item: item,
          // price: currformatter.format(price),
          id: Date.now(),
        },
      ];
    case "TRASH":
      return state.filter((el) => el.id !== action.payload.id);
    default:
      return state;
  }
};

export default uploadReducer;
