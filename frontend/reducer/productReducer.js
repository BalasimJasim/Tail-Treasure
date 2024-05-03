/* eslint-disable no-case-declarations */
export const productReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const checkProductExists = state.filter(
        (product) => product.id === action.payload.id
      );
      if (checkProductExists.length === 1) {
        console.log("product does exist");
        return state.map((product) => {
          if (product.id === action.payload.id) {
            return { ...product, amount: (product.amount += 1) };
          } else {
            return product;
          }
        });
      } else {
        return [...state, { ...action.payload, amount: 1 }];
      }
    case "REMOVE":
      const [itemRemoved] = state.filter((product) => {
        return product.id === action.payload;
      });
      if (itemRemoved.amount > 1) {
        return state.map((product) => {
          if (product.id === action.payload) {
            return { ...product, amount: (product.amount -= 1) };
          } else {
            return product;
          }
        });
      } else {
        return state.filter((product) => product.id !== action.payload);
      }
    default:
      throw new Error("No action of:", action);
  }
};
