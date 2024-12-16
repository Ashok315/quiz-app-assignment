// src/components/Quiz.js
import React, { useEffect } from 'react';
import { useQuizContext } from '../context/QuizContext';
import { submitAnswers } from '../api/quizAPI';
import styles from './Quiz.module.css';

const Quiz = () => {
  const {
    quizState: { questions, currentQuestionIndex, selectedAnswers },
    submitAnswer,
    nextQuestion,
    finishQuiz,
  } = useQuizContext();

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionChange = (optionId) => {
    if (currentQuestion.isMultipleChoice) {
      const newAnswers = selectedAnswers.includes(optionId)
        ? selectedAnswers.filter((id) => id !== optionId)
        : [...selectedAnswers, optionId];
      submitAnswer(newAnswers);
    } else {
      submitAnswer([optionId]);
    }
  };

  const handleSubmit = async () => {
    const isCorrect = JSON.stringify(currentQuestion.correctAnswer.sort()) === JSON.stringify(selectedAnswers.sort());
    const newScore = isCorrect ? 1 : 0;
    finishQuiz(newScore);
    if (currentQuestionIndex < questions.length - 1) {
      nextQuestion();
    } else {
      alert('Quiz Finished!');
    }
  };

  return (
    <div className={styles.quiz}>
      <h2>{currentQuestion.text}</h2>
      {currentQuestion.image && <img src={currentQuestion.image} alt="question" />}
      <div>
        {currentQuestion.options.map((option) => (
          <div key={option.id}>
            <input
              type={currentQuestion.isMultipleChoice ? 'checkbox' : 'radio'}
              id={option.id}
              name="options"
              value={option.id}
              checked={selectedAnswers.includes(option.id)}
              onChange={() => handleOptionChange(option.id)}
            />
            <label htmlFor={option.id}>{option.text}</label>
          </div>
        ))}
      </div>
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
};

export default Quiz;
