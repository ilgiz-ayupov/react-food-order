import React, { useReducer } from "react";
import CartContext from "./cartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "APPEND_ITEM") {
    const findIndexCartItem = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const cartItem = state.items[findIndexCartItem];

    let updatedCartItems;
    if (cartItem) {
      let updatedCartItem = {
        ...cartItem,
        count: cartItem.count + action.item.count,
      };
      updatedCartItems = [...state.items];
      updatedCartItems[findIndexCartItem] = updatedCartItem;
    } else {
      updatedCartItems = [...state.items, action.item];
    }

    return {
      items: updatedCartItems,
      totalAmount: state.totalAmount + action.item.price * action.item.count,
    };
  } else if (action.type === "REMOVE_ITEM") {
    const findIndexCartItem = state.items.findIndex(
      (item) => item.id === action.id
    );
    const cartItem = state.items[findIndexCartItem];

    let updatedCartItems;
    if (cartItem) {
      const updatedCartItem = {
        ...cartItem,
        count: cartItem.count - 1,
      };

      if (updatedCartItem.count <= 0) {
        updatedCartItems = state.items.filter(
          (item) => item.id !== updatedCartItem.id
        );
      } else {
        updatedCartItems = [...state.items];
        updatedCartItems[findIndexCartItem] = updatedCartItem;
      }
    } else {
      updatedCartItems = [...state.items];
    }

    return {
      items: updatedCartItems,
      totalAmount: state.totalAmount - cartItem.price,
    };
  }

  return defaultCartState;
};

const CartContextProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const appendItem = (item) => {
    dispatchCartAction({
      type: "APPEND_ITEM",
      item,
    });
  };

  const removeItem = (id) => {
    dispatchCartAction({
      type: "REMOVE_ITEM",
      id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    appendItem,
    removeItem,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
