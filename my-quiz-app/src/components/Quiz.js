import React, { useEffect, useState } from "react";
import { fetchQuizData } from "../services/quizServices";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  useEffect(() => {
    const getQuizData = async () => {
      const quizData = await fetchQuizData();
      setQuestions(quizData);
    };
    getQuizData();
  }, []);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  };
  if (questions.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestionIndex + 1}</span>
              {questions.length}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestionIndex].incorrect_answers.map(
              (answer, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerButtonClick(false)}
                >
                  {answer}
                </button>
              )
            )}
            <button onClick={() => handleAnswerButtonClick(true)}>
              {questions[currentQuestionIndex].correct_answers}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
