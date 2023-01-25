import React, { useContext, useEffect, useState } from "react";
import styles from "./CartButton.module.css";
import cn from "classnames";
import { ReactComponent as CartIcon } from "@assets/icons/cart.svg";

import { CartContext } from "@store/Cart";

const CartButton = ({ onClick, children }) => {
  const [isButtonAnimated, setButtonIsAnimated] = useState(false);
  const cartContext = useContext(CartContext);
  const countCartItems = cartContext.items.reduce(
    (acc, item) => acc + Number(item.count),
    0
  );

  useEffect(() => {
    if (countCartItems === 0) {
      return;
    }
    setButtonIsAnimated(true);
    const timer = setTimeout(() => setButtonIsAnimated(false), 300);

    return () => clearTimeout(timer);
  }, [countCartItems]);

  return (
    <button
      className={cn([styles.button], {
        [styles.bump]: isButtonAnimated,
      })}
      onClick={onClick}
    >
      <span>
        <CartIcon />
      </span>
      <span>{children}</span>
      <span className={styles.badge}>{countCartItems}</span>
    </button>
  );
};

export default CartButton;
