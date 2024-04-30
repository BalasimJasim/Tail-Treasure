const userReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER_USER_START":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "REGISTER_USER_SUCCESS":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case "REGISTER_USER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
