import React from "react";
import cn from "classnames";
import styles from "./Card.module.css";

const Card = ({ className, children }) => {
  const classes = cn([styles.card], className);
  return <div className={classes}>{children}</div>;
};

export default Card;
