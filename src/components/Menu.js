import React from "react";
import style from "../styles/05-menu.module.css";

const Menu = ({ items }) => {
  return (
    <div className={style.section_center}>
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className={style.menu_item}>
            <img src={img} alt={title} className={style.photo} />
            <div className={style.item_info}>
              <header>
                <h4>{title}</h4>
                <h4 className={style.price}>${price}</h4>
              </header>
              <p className={style.item_text}>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
