import React, { useEffect, useState } from "react";
import "./QuestionList.css";

const generateAnswerDefaultObject = (questionsObj) => {
  const ans = {};
  const ans1 = {};

  questionsObj.forEach(({ Qn, answer }) => {
    ans[Qn] = null;
    // console.log(Qn);
    ans1[answer] = null;
    // console.log(answer);
  });
  return ans;
};

function QuestionList({ questions }) {
  const [selectAnswer, setSelectAnswer] = useState(
    generateAnswerDefaultObject(questions)
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(15);
  // console.log(selectAnswer);

  const handleNext = () => {
    setTimeout(() => {
      setCurrentQuestion(currentQuestion + 1);
      setTimer(15);
    }, 1000);
    // console.log(currentQuestion);
  };

  const activeQuestion = questions[currentQuestion];

  // ---------Timer ------------

  useEffect(() => {
    let time;
    if (timer > 0) {
      time = setInterval(() => {
        console.log("hii", timer);
        setTimer((prev) => {
          if (prev > 0) return prev - 1;
          else return 0;
        });
      }, 1000);
    } else {
      handleNext();
    }
    return () => clearInterval(time);
  }, [timer]);

  // ---------Button ------------

  const handleAnswer = (qn, optId) => {
    const newObj = { ...selectAnswer };
    newObj[qn] = optId;
    setSelectAnswer(newObj);
    handleNext();

    if (activeQuestion.answer === optId) {
      setScore(score + 5);
    }
  };

  return (
    <>
      <div className="Question-box">
        {currentQuestion < questions.length &&
          questions.map((elem) => {
            return (
              <div
                key={elem.Qn}
                className={`question_item ${
                  activeQuestion === elem ? "show-que" : "hide-que"
                }`}
                // style={{ display: activeQuestion === elem ? "block" : "none" }}
              >
                <div className="timer">
                  <h2>Quiz</h2>
                  <p>
                    {/* Time Remaining: {minutes < 10 ? "0" + minutes : minutes}:
                  {seconds < 10 ? "0" + seconds : seconds} */}
                    time Remaining: {timer}
                  </p>
                </div>
                {/* questions */}
                <div className="question-heading">
                  <h2>
                    {elem.Qn} {elem.question}
                  </h2>
                </div>

                {/* Options */}
                <div className="Option-item">
                  {elem.options.map((opt) => {
                    let isAnswered = selectAnswer[elem.Qn] !== null;
                    let isAnswerCorrect = selectAnswer[elem.Qn] === elem.answer;
                    let cssClass = "default-option";
                    if (
                      isAnswered &&
                      isAnswerCorrect &&
                      opt.id === selectAnswer[elem.Qn]
                    ) {
                      cssClass = "correct-answer";
                    } else if (
                      isAnswered &&
                      !isAnswerCorrect &&
                      opt.id === selectAnswer[elem.Qn]
                    ) {
                      cssClass = "wrong-answer";
                    }
                    // console.log(cssClass);
                    return (
                      <div key={opt.id} className="option-btn">
                        <button
                          onClick={() => handleAnswer(elem.Qn, opt.id)}
                          disabled={isAnswered}
                          className={cssClass}

                          // id={selectAnswer[elem.answer] === opt.id ? "sel" : ""}
                        >
                          <p>{opt.text}</p>
                        </button>
                      </div>
                    );
                  })}
                  <h2 className="score">Score : {score}/100</h2>
                </div>
              </div>
            );
          })}

        {currentQuestion == questions.length && <div className="complete_page">
         
          <h1>Quiz Completed !</h1>
          <h2>Your score is: {score}</h2>
          <h1>Thanks for participating !</h1>
          </div>}
      </div>
    </>
  );
}

export default QuestionList;
