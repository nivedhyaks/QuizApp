import React, { useState } from 'react';
import questions from '../data/questions';
import Question from './Question';
import Result from './Result';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState(new Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOptions) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = selectedOptions;
    setAnswers(updatedAnswers);
  };

  const goToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const finishQuiz = () => {
    calculateScore();
  };

  const calculateScore = () => {
    let newScore = 0;
    answers.forEach((answer, index) => {
      const correctAnswer = questions[index].answer;
      if (Array.isArray(correctAnswer)) {
        const isCorrect = correctAnswer.length === answer.length &&
          correctAnswer.every((ans) => answer.includes(ans));
        if (isCorrect) newScore += 1;
      } else {
        if (answer && answer.includes(correctAnswer)) {
          newScore += 1;
        }
      }
    });
    setScore(newScore);
    setShowResult(true);
  };

  return (
    <div className="quiz-container">
      {!showResult ? (
        <Question
          id={currentQuestion + 1}
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          handleAnswer={handleAnswer}
          goToNextQuestion={goToNextQuestion}
          goToPreviousQuestion={goToPreviousQuestion}
          disablePrevious={currentQuestion === 0}
          isLastQuestion={currentQuestion === questions.length - 1}
          finishQuiz={finishQuiz}
        />
      ) : (
        <Result score={score} totalQuestions={questions.length} />
      )}
    </div>
  );
};

export default Quiz;
