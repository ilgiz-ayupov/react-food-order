import React, { useContext } from "react";
import styles from "./MealItem.module.css";

import { MealItemForm } from "@components/meals";

import { CartContext } from "@store/Cart";

const MealItem = ({ id, name, description, price }) => {
  const cartContext = useContext(CartContext);

  const formattedPrice = `$${price.toFixed(2)}`;

  const appendCartItemHandler = (count) => {
    const newItem = {
      id,
      name,
      count,
      price,
    };
    console.log(newItem);
    cartContext.appendItem(newItem);
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
        <strong className={styles.price}>{formattedPrice}</strong>
      </div>
      <MealItemForm itemId={id} onAppendCartItem={appendCartItemHandler} />
    </li>
  );
};

export default MealItem;
