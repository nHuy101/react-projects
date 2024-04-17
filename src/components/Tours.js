import React from "react";
import Tour from "./Tour";
import style from "../styles/02-tours.module.css";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className={style.title}>
        <h2>our tours</h2>
        <div className={style.underline}></div>
      </div>
      <div className={style.toursWrapper}>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
