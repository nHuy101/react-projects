import React from "react";
import style from "../styles/05-menu.module.css";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className={style.btn_container}>
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className={style.filter_btn}
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
