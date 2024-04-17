import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import job from "../data/jobData";
import style from "../styles/06-tabs.module.css";

const url = "https://course-api.com/react-tabs-project";

function Ex6() {
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    try {
      const response = await fetch(url);
      const newJobs = await response.json();
      setJobs(newJobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setJobs(job);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (jobs.length === 0) {
    return <h2>Loading...</h2>;
  }

  if (value < 0 || value >= jobs.length) {
    setValue(0);
  }

  const { company, dates, duties, title } = jobs[value];
  return (
    <section className={style.section}>
      <div className={style.jobscenter}>
        {/* btn container */}
        <div className={style.btncontainer}>
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`${style.jobbtn} ${
                  index === value ? style.activebtn : ""
                }`}
              >
                {item.company}
              </button>
            );
          })}
        </div>

        <article className={style.jobinfo}>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className={style.jobdate}>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className={style.jobdesc}>
                <FaAngleDoubleRight
                  className={style.jobicon}
                ></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
      <button type="button" className={style.btn}>
        more info
      </button>
    </section>
  );
}

export default Ex6;
