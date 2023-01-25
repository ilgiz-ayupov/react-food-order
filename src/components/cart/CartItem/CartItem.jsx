import styles from "./CartItem.module.css";

const CartItem = ({ item, onRemove, onAdd }) => {
  const { id, name, count, price } = item;
  const formattedPrice = `$${price.toFixed(2)}`;

  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{formattedPrice}</span>
          <span className={styles.amount}>x {count}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={() => onRemove(id)}>−</button>
        <button onClick={() => onAdd(item)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
