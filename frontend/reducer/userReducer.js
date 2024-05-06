export const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        isAccountVerified: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAccountVerified: false,
      };
    default:
      return state;
  }
};
