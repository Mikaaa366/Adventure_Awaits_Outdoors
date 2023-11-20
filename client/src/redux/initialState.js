import { getLocalStorage } from "./cartRedux";

const initialState = {
  products: {
    data: [],
  },
  cart: {
    products: getLocalStorage(),
  },
  orders: [],
};

export default initialState;
