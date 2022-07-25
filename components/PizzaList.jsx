import React from "react";
import styles from "../styles/PizzaList.module.css";
import PizzaCart from "./PizzaCart";

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
        magnam cum dolores nemo reiciendis quae ad, blanditiis quibusdam
        voluptate quaerat? Laboriosam minima, minus aperiam est fugiat illum!
        Ad, corrupti earum.
      </p>
      <div className={styles.wrapper}>
        <PizzaCart />
        <PizzaCart />
        <PizzaCart />
        <PizzaCart />
        <PizzaCart />
        <PizzaCart />
        <PizzaCart />
        <PizzaCart />
      </div>
    </div>
  );
};

export default PizzaList;
