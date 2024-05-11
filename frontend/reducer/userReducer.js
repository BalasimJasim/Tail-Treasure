export const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        isAccountVerified: true,
        isAdmin: action.payload.user || false,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAccountVerified: false,
        isAdmin: false,
      };
    case "SET_USER_COUNT":
      return {
        ...state,
        userCount: action.payload,
      };
    default:
      return state;
  }
};
