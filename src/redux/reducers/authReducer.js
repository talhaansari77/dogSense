import constants from "../constants";

const initialState = {
  user: { },
  settings: {darkMode:true},
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.LOGIN: {
      let newState = { ...state, user: action.payload };
      console.log("LOGIN:", newState);
      return newState;
    }
    case constants.LOGOUT: {
      let newState = { ...state, user: {} };
      console.log("LOGOUT:", newState);
      return newState;
    }
    case constants.SETTING: {
      let newState = { ...state, settings: action.payload };
      console.log("SETTING:", newState);
      return newState;
    }
    default:
      return state;
  }
};

export default authReducer;
