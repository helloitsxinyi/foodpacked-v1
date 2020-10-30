export const add = () => {
  return {
    type: "ADD",
  };
};

export const trash = () => {
  return {
    type: "TRASH",
  };
};

export const name = (value) => {
  return {
    type: "NAME",
    payload: value,
  };
};
