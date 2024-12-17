import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Question from './pages/Question/Question'
import Report from './pages/Report/Report'
import { QuizProvider } from './context/QuizContext'
import Loading from './components/Loading/Loading'
import { useState } from 'react'
import { setupInterceptors } from './api/quizApi'

function App() {

  const [loading,setLoading]=useState(false);
  const loadingShow=(show)=>setLoading(show);

  // calling interceptor to update loading state
  setupInterceptors(loadingShow);

  return (
    <QuizProvider>
         <Router>
         <Loading show={loading}></Loading>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/question' element={<Question></Question>}></Route>
                <Route path='/report' element={<Report></Report>}></Route>
            </Routes>
         </Router>
    </QuizProvider>
  )
}

export default App
