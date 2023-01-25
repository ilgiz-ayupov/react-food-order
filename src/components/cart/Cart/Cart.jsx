import React, { useContext } from "react";
import styles from "./Cart.module.css";

import { Modal } from "@components/UI";
import { CartItem } from "@components/cart";

import { CartContext } from "@store/Cart";

const Cart = ({ onHideCart }) => {
  const cartContext = useContext(CartContext);

  const removeCartItemHandler = (id) => {
    cartContext.removeItem(id);
  };
  const addCartItemHandler = (item) => {
    cartContext.appendItem({ ...item, count: 1 });
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={`${item.id}-${item.count}`}
          item={item}
          onRemove={removeCartItemHandler}
          onAdd={addCartItemHandler}
        >
          {item.name}
        </CartItem>
      ))}
    </ul>
  );

  const formattedTotalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  return (
    <Modal onCloseModal={onHideCart}>
      <ul>{cartItems}</ul>
      <div className={styles.total}>
        <span>Итого</span>
        <span>{formattedTotalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button
          type="button"
          className={styles["button--alt"]}
          onClick={onHideCart}
        >
          Закрыть
        </button>
        {hasItems && (
          <button type="button" className={styles.button}>
            Заказать
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
