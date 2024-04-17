import React, { useState } from "react";
import List from "../components/List";
import data from "../data/birthdayData";
import style from "../styles/01-birthday-reminder.module.css";

const Ex1 = () => {
  const [people, setPeople] = useState(data);
  const clear = () => {
    setPeople([]);
  };
  return (
    <div className={style.main}>
      <div className={style.body}>
        <div className={style.container}>
          <h3>{people.length} Birthday todays</h3>
          <List people={people} />
          <button className={style.clearBtn} onClick={clear}>
            clear all
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ex1;
