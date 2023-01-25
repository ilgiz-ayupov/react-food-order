import { createContext } from "react";

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  appendItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
