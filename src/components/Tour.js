import React, { useState } from "react";
import style from "../styles/02-tours.module.css";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className={style.singleTour}>
      <img src={image} alt={name} />
      <footer>
        <div className={style.tourInfo}>
          <h4>{name}</h4>
          <h4 className={style.tourPrice}>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "  read more"}
          </button>
        </p>
        <button className={style.deleteBtn} onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
