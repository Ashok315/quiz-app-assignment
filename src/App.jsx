import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Question from './pages/Question/Question'
import Report from './pages/Report/Report'

function App() {

  return (
    <>
         <Router>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/question' element={<Question></Question>}></Route>
                <Route path='/report' element={<Report></Report>}></Route>
            </Routes>
         </Router>
    </>
  )
}

export default App
