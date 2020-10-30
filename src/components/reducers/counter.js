const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "TRASH":
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;

// add & trash are 2 different reducers!

// git, DB, deployment, !! backend: express, node !!

// express DB API (mongo)
// git for VC
