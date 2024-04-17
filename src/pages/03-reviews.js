import React from "react";
import Review from "../components/Review";
import style from "../styles/03-reviews.module.css";

const Ex3 = () => {
  return (
    <main>
      <section className={style.container}>
        <div className={style.title}>
          <h2>our reviews</h2>
          <div className={style.underline}></div>
        </div>
        <Review />
      </section>
    </main>
  );
};

export default Ex3;
