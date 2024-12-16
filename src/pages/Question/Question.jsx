// import React from "react";
// import styles from "./Question.module.css"
// import Button from "../../components/Button";
// import Wrapper from "../../components/Wrapper";
// import { useQuizContext } from "../../context/QuizContext";
// import { useNavigate } from "react-router-dom";
// const Question = () =>{

//     const navigate = useNavigate();

//     const {
//         quizState: { questions, currentQuestionIndex, selectedAnswers },
//         submitAnswer,
//         nextQuestion,
//         finishQuiz,
//       } = useQuizContext();
    
//       const currentQuestion = questions[currentQuestionIndex];
     
//       const handleOptionChange = (optionId) => {
//         if (currentQuestion.isMultipleChoice) {
//           const newAnswers = selectedAnswers.includes(optionId)
//             ? selectedAnswers.filter((id) => id !== optionId)
//             : [...selectedAnswers, optionId];
//           submitAnswer(newAnswers);
//         } else {
//           submitAnswer([optionId]);
//         }
//       };
    
//       const handleSubmit = async () => {
//         const isCorrect = JSON.stringify(currentQuestion.correctAnswer.sort()) === JSON.stringify(selectedAnswers.sort());
//         console.log(currentQuestion.correctAnswer.sort())
//         console.log(JSON.stringify(selectedAnswers.sort()))
//         const newScore = isCorrect ? 1 : 0;
//         finishQuiz(newScore);
//         if (currentQuestionIndex < questions.length - 1) {
//           nextQuestion();
//         } else {
//             navigate('/report');
//         }
//       };

//     return (
//         <Wrapper>
//             {/* questions-box */}
//             <div className={styles.questionBox}> 
//                 {/*question and options  */}
//                 <div>
//                         <h3>{currentQuestion.text}</h3>
                    
//                         <div>
//                             {currentQuestion.image && <img src={currentQuestion.image} alt="question" />}
//                         </div>

                        
//                         <div className={styles.options}>
//                               {currentQuestion.options.map((option) => (
//                                 <div key={option.id}>
//                                     <input
//                                         type={currentQuestion.isMultipleChoice ? 'checkbox' : 'radio'}
//                                         id={option.id}
//                                         name="options"
//                                         value={option.id}
//                                         checked={selectedAnswers.includes(option.id)}
//                                         onChange={() => handleOptionChange(option.id)}
//                                     />
//                                     <label htmlFor={option.id}>{option.text}</label>
//                                 </div>
//                                 ))}
//                         </div>      
//                 </div>
                
//                 {/* progress-bar */}
//                 <div className={styles.progressBar}>
//                     <div className={styles.progressRing}>
//                         <p>5</p>
//                     </div>          
//                 </div>
        
//                 <Button onClick={handleSubmit} className={styles.nextBtn}>Next <span>&#x1F852;</span></Button>            
//             </div>        
//         </Wrapper>
//     )
// }

// export default Question;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import styles from './Question.module.css';
// import Button from '../../components/Button';
// import Wrapper from '../../components/Wrapper';
// import { useQuizContext } from '../../context/QuizContext';

// const Question = () => {
//   const navigate = useNavigate();

//   const {
//     quizState: { questions, currentQuestionIndex, selectedAnswers },
//     submitAnswer,
//     nextQuestion,
//     finishQuiz,
//   } = useQuizContext();

//   const currentQuestion = questions[currentQuestionIndex];

//   const handleOptionChange = (optionId) => {
//     if (currentQuestion.isMultipleChoice) {
//       const updatedAnswers = selectedAnswers.includes(optionId)
//         ? selectedAnswers.filter((id) => id !== optionId)
//         : [...selectedAnswers, optionId];
//       submitAnswer(updatedAnswers);
//     } else {
//       submitAnswer([optionId]);
//     }
//   };

//   const handleSubmit = () => {
//     const isCorrect =
//       JSON.stringify(currentQuestion.correctAnswer.sort()) ===
//       JSON.stringify(selectedAnswers.sort());
//       const newScore = isCorrect ? 1 : 0;
//       finishQuiz(newScore);

//     if (currentQuestionIndex < questions.length - 1) {
//       nextQuestion();
//     } else {
//       navigate('/report');
//     }
//   };

//   return (
//     <Wrapper>
//       <div className={styles.questionBox}>
//         <h3>{currentQuestion.text}</h3>

//         {currentQuestion.image && (
//           <div>
//             <img src={currentQuestion.image} alt="question" />
//           </div>
//         )}

//         <div className={styles.options}>
//           {currentQuestion.options.map((option) => (
//             <div key={option.id}>
//               <input
//                 type={currentQuestion.isMultipleChoice ? 'checkbox' : 'radio'}
//                 id={option.id}
//                 name="options"
//                 value={option.id}
//                 checked={selectedAnswers.includes(option.id)}
//                 onChange={() => handleOptionChange(option.id)}
//               />
//               <label htmlFor={option.id}>{option.text}</label>
//             </div>
//           ))}
//         </div>

//         <div className={styles.progressBar}>
//           <div className={styles.progressRing}>
//             <p>{currentQuestionIndex + 1}/{questions.length}</p>
//           </div>
//         </div>

//         <Button onClick={handleSubmit} className={styles.nextBtn}>
//           Next <span>&#x1F852;</span>
//         </Button>
//       </div>
//     </Wrapper>
//   );
// };

// export default Question;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Question.module.css';
import Button from '../../components/Button';
import Wrapper from '../../components/Wrapper';
import { useQuizContext } from '../../context/QuizContext';

const Question = () => {
  const navigate = useNavigate();
  const [startTime, setStartTime] = useState(null); 

  const {
    quizState: { questions, currentQuestionIndex, selectedAnswers },
    submitAnswer,
    nextQuestion,
    finishQuiz,
  } = useQuizContext();

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    // Start the timer as soon as the question is displayed
    setStartTime(Date.now()); 
  }, [currentQuestionIndex]);

  const handleOptionChange = (optionId) => {
    if (currentQuestion.isMultipleChoice) {
      const updatedAnswers = selectedAnswers.includes(optionId)
        ? selectedAnswers.filter((id) => id !== optionId)
        : [...selectedAnswers, optionId];
      submitAnswer(updatedAnswers);
    } else {
      submitAnswer([optionId]);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswers.length === 0) {
        alert('Please select at least one option before proceeding to the next question.');
        return; 
      }

    const isCorrect =
      JSON.stringify(currentQuestion.correctAnswer.sort()) ===
      JSON.stringify(selectedAnswers.sort());
    const newScore = isCorrect ? 1 : 0;
    finishQuiz(newScore, isCorrect);

    const timeSpent = Date.now() - startTime; // Calculate time spent on this question

    if (currentQuestionIndex < questions.length - 1) {
      nextQuestion(timeSpent); // Pass timeSpent to next question
    } else {
      navigate('/report');
    }
  };

  return (
    <Wrapper>
      <div className={styles.questionBox}>
        <h3>{currentQuestion?.text}</h3>

        {currentQuestion?.image && (
          <div>
            <img src={currentQuestion.image} alt="question" />
          </div>
        )}

        <div className={styles.options}>
          {currentQuestion?.options.map((option) => (
            <div key={option.id} className={`${selectedAnswers.includes(option.id) ? styles.selected : ''}`}>
              <input
                type={currentQuestion.isMultipleChoice ? 'checkbox' : 'radio'}
                id={option.id}
                name="options"
                value={option.id}
                checked={selectedAnswers.includes(option.id)}
                onChange={() => handleOptionChange(option.id)}
                className={styles.optionInput}
              />
              <label htmlFor={option.id} className={styles.optionLabel}>{option.text}</label>
            </div>
          ))}
        </div>

        <div className={styles.progressBar}>
          <div className={styles.progressRing}>
            <p>
              {currentQuestionIndex + 1}/<span>{questions.length}</span>
            </p>
          </div>
        </div>

        <Button onClick={handleSubmit} className={styles.nextBtn}>
          Next <span>&#x1F852;</span>
        </Button>
      </div>
    </Wrapper>
  );
};

export default Question;

