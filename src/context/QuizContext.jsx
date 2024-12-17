import React, { createContext, useState, useContext } from 'react';

const QuizContext = createContext();

export const useQuizContext = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {
  const [quizState, setQuizState] = useState({
    questions: [], 
    currentQuestionIndex: 0,
    selectedAnswers: [],
    score: 0,
    correctAnswersCount: 0,
    incorrectAnswersCount: 0,
    timeSpentPerQuestion: [], 
  });

  // start quiz
  const startQuiz = (questions) => {
    setQuizState({
      questions,
      currentQuestionIndex: 0,
      selectedAnswers: [],
      score: 0,
      correctAnswersCount: 0,
      incorrectAnswersCount: 0,
      timeSpentPerQuestion: [],
    });
  };

  // submit answer
  const submitAnswer = (answers) => {
    setQuizState((prevState) => ({
      ...prevState,
      selectedAnswers: answers, 
    }));
  };

  //for next question
  const nextQuestion = (timeSpent) => {
    setQuizState((prevState) => ({
      ...prevState,
      currentQuestionIndex: prevState.currentQuestionIndex + 1,
      timeSpentPerQuestion: [
        ...prevState.timeSpentPerQuestion,
        { questionIndex: prevState.currentQuestionIndex, time: timeSpent },
      ], // Track the time spent on the current question
      selectedAnswers: [], 
    }));
  };

  // finish quiz
  const finishQuiz = (newScore, isCorrect) => {
    setQuizState((prevState) => ({
      ...prevState,
      score: prevState.score + newScore, 
      correctAnswersCount: isCorrect
        ? prevState.correctAnswersCount + 1
        : prevState.correctAnswersCount,
      incorrectAnswersCount: isCorrect
        ? prevState.incorrectAnswersCount
        : prevState.incorrectAnswersCount + 1,
    }));
  };

// rest quiz
  const resetQuiz = () => {
    setQuizState({
      questions: [],
      currentQuestionIndex: 0,
      selectedAnswers: [],
      score: 0,
      correctAnswersCount: 0,
      incorrectAnswersCount: 0,
      timeSpentPerQuestion: [],
    });
  };

  return (
    <QuizContext.Provider
      value={{
        quizState,
        startQuiz,
        submitAnswer,
        nextQuestion,
        finishQuiz,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

