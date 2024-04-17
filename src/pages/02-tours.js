import React, { useEffect, useState } from "react";
import Tours from "../components/Tours";
import data from "../data/toursData";
import style from "../styles/02-tours.module.css";

const api = "https://course-api.com/react-tours-project";

const Ex2 = () => {
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    try {
      const response = await fetch(api);
      const tours = await response.json();
      throw new Error();
      setTours(tours);
    } catch (error) {
      setTours(data);
    }
  };

  const removeTour = (id) => {
    const newTours = tours.filter((tours) => tours.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (tours.length === 0) {
    return (
      <div className={style.main}>
        <div className={style.title}>
          <h2>no tours left</h2>
          <button className={style.btn} onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className={style.main}>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
};

export default Ex2;
