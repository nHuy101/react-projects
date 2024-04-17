import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import people from "../data/reviewsData";
import style from "../styles/03-reviews.module.css";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const previosPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className={style.review}>
      <div className={style.img_container}>
        <img src={image} alt={name} className={style.person_img} />
        <span className={style.quote_icon}>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className={style.author}>{name}</h4>
      <p className={style.job}>{job}</p>
      <p className={style.info}>{text}</p>
      <div className={style.buttoncontainer}>
        <button className={style.prev_btn} onClick={previosPerson}>
          <FaChevronLeft />
        </button>
        <button className={style.next_btn} onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className={style.random_btn} onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
