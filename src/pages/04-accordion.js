import React, { useState } from "react";
import data from "../data/questionsData";
import Question from "../components/Question";
import style from "../styles/04-accordion.module.css";

function Ex4() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className={style.container}>
        <h3>Q&A</h3>
        <section className={style.info}>
          {questions.map((question) => {
            return <Question key={question.id} {...question}></Question>;
          })}
        </section>
      </div>
    </main>
  );
}

export default Ex4;
