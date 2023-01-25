import React, { useRef } from "react";
import styles from "./MealItemForm.module.css";

import { Input } from "@components/UI";

const MealItemForm = ({ itemId, onAppendCartItem }) => {
  const countInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const inputCount = countInputRef.current.value;
    if (inputCount.trim().length === 0) {
      return;
    }
    onAppendCartItem(Number(inputCount));
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={countInputRef}
        label="Количество:"
        input={{
          id: `meal-item-count-${itemId}`,
          type: "number",
          defaultValue: "1",
          min: "1",
          max: "10",
          step: "1",
        }}
      />
      <button type="submit">Заказать</button>
    </form>
  );
};

export default MealItemForm;
