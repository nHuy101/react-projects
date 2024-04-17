import React, { useState } from "react";
import Menu from "../components/Menu";
import Categories from "../components/Categories";
import items from "../data/dishData";
import style from "../styles/05-menu.module.css";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function Ex5() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className={style.menuSection}>
        <div className={style.title}>
          <h2>our menu</h2>
          <div className={style.underline}></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default Ex5;
