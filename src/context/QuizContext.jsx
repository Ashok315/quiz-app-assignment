
// import React, { createContext, useState, useContext } from 'react';

// const QuizContext = createContext();

// export const useQuizContext = () => {
//   return useContext(QuizContext);
// };

// export const QuizProvider = ({ children }) => {
//   const [quizState, setQuizState] = useState({
//     questions: [],
//     currentQuestionIndex: 0,
//     selectedAnswers: [],
//     score: 0,
//   });

//   const startQuiz = (questions) => {
//     setQuizState({
//       ...quizState,
//       questions,
//       currentQuestionIndex: 0,
//       selectedAnswers: [],
//       score: 0,
//     });
//   };

//   const submitAnswer = (answer) => {
//     setQuizState({
//       ...quizState,
//       selectedAnswers: [...quizState.selectedAnswers, answer],
//     });
//   };

//   const nextQuestion = () => {
//     setQuizState({
//       ...quizState,
//       currentQuestionIndex: quizState.currentQuestionIndex + 1,
//     });
//   };

//   const finishQuiz = (score) => {
//     setQuizState({
//       ...quizState,
//       score,
//     });
//   };

//   return (
//     <QuizContext.Provider
//       value={{
//         quizState,
//         startQuiz,
//         submitAnswer,
//         nextQuestion,
//         finishQuiz,
//       }}
//     >
//       {children}
//     </QuizContext.Provider>
//   );
// };

// import React, { createContext, useState, useContext } from 'react';

// const QuizContext = createContext();

// export const useQuizContext = () => useContext(QuizContext);

// export const QuizProvider = ({ children }) => {
//   const [quizState, setQuizState] = useState({
//     questions: [], // Add mock data here if needed
//     currentQuestionIndex: 0,
//     selectedAnswers: [],
//     score: 0,
//   });

//   const startQuiz = (questions) => {
//     setQuizState({
//       questions,
//       currentQuestionIndex: 0,
//       selectedAnswers: [],
//       score: 0,
//     });
//   };

//   const submitAnswer = (answers) => {
//     setQuizState((prevState) => ({
//       ...prevState,
//       selectedAnswers: answers, // Properly update selected answers
//     }));
//   };

//   const nextQuestion = () => {
//     setQuizState((prevState) => ({
//       ...prevState,
//       currentQuestionIndex: prevState.currentQuestionIndex + 1,
//       selectedAnswers: [], // Reset selectedAnswers for the next question
//     }));
//   };

//   const finishQuiz = (newScore) => {
//     setQuizState((prevState) => ({
//       ...prevState,
//       score: prevState.score + newScore, // Accumulate the score
//     }));
//   };

//   const resetQuiz = () => {
//     setQuizState({
//       questions: [],
//       currentQuestionIndex: 0,
//       selectedAnswers: [],
//       score: 0,
//       timeSpentPerQuestion: [],
//     });
//   };


//   return (
//     <QuizContext.Provider
//       value={{
//         quizState,
//         startQuiz,
//         submitAnswer,
//         nextQuestion,
//         finishQuiz,
//         resetQuiz
//       }}
//     >
//       {children}
//     </QuizContext.Provider>
//   );
// };


import React, { createContext, useState, useContext } from 'react';

const QuizContext = createContext();

export const useQuizContext = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {
  const [quizState, setQuizState] = useState({
    questions: [], // Add mock data here if needed
    currentQuestionIndex: 0,
    selectedAnswers: [],
    score: 0,
    correctAnswersCount: 0,
    incorrectAnswersCount: 0,
    timeSpentPerQuestion: [], // To track time spent on each question
  });

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

  const submitAnswer = (answers) => {
    setQuizState((prevState) => ({
      ...prevState,
      selectedAnswers: answers, // Properly update selected answers
    }));
  };

  const nextQuestion = (timeSpent) => {
    setQuizState((prevState) => ({
      ...prevState,
      currentQuestionIndex: prevState.currentQuestionIndex + 1,
      timeSpentPerQuestion: [
        ...prevState.timeSpentPerQuestion,
        { questionIndex: prevState.currentQuestionIndex, time: timeSpent },
      ], // Track the time spent on the current question
      selectedAnswers: [], // Reset selectedAnswers for the next question
    }));
  };

  const finishQuiz = (newScore, isCorrect) => {
    setQuizState((prevState) => ({
      ...prevState,
      score: prevState.score + newScore, // Accumulate the score
      correctAnswersCount: isCorrect
        ? prevState.correctAnswersCount + 1
        : prevState.correctAnswersCount,
      incorrectAnswersCount: isCorrect
        ? prevState.incorrectAnswersCount
        : prevState.incorrectAnswersCount + 1,
    }));
  };

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

