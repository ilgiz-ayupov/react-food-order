import React from "react";
import styles from "./MealList.module.css";
import meals from "./meals.json";

import { Card } from "@components/UI";
import { MealItem } from "@components/meals";

const DUMMY_MEALS = meals;

const MealsList = () => {
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem key={meal.id} {...meal} />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default MealsList;
