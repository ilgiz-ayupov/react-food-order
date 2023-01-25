import React from "react";
import styles from "./Header.module.css";
import sushiImg from "@assets/images/sushi.jpg";

import { CartButton } from "@components/cart";

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Япона Кухня</h1>
        <CartButton onClick={onShowCart}>Корзина</CartButton>
      </header>

      <div className={styles["main-image"]}>
        <img src={sushiImg} alt="Блюда японской кухни" />
      </div>
    </>
  );
};

export default Header;
