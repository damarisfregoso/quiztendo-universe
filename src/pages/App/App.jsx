import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import NavBar from '../../components/NavBar/NavBar';
import HelpPage from '../HelpPage/HelpPage';
import WelcomePage from '../WelcomePage/WelcomePage';
import QuizPage from '../QuizPage/QuizPage';
import characters from '../../utilities/character-image';
import StartQuizPage from '../StartQuizPage/StartQuizPage';
import * as quizzesAPI from '../../utilities/quizzes-api'
import LeaderBoardPage from '../LeaderBoardPage/LeaderBoardPage';
import MyPastQuizPage from '../MyPastQuizPage/MyPastQuizPage';
import AuthPage from '../AuthPage/AuthPage';
import './App.css';
import Footer from '../../components/Footer/Footer';
import ScrollToTop from '../../components/ScrollToTop';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    // Fetch quiz data using an async function
    async function getQuizzes() {
      try {
      const quizzes = await quizzesAPI.getAll();
      setQuizzes(quizzes);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      }
    }
    getQuizzes();
  }, []);

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />

      <ScrollToTop />
      <Routes>
        {/* Route components in here */}
        <Route path="/" element={<WelcomePage user={user} characters={characters} quizzes={quizzes}/>} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/quiz/:quizId" element={<QuizPage />} />
        <Route path="/leaderboard" element={<LeaderBoardPage quizzes={quizzes} user={user} />} />
        <Route path="/myquizzes" element={<MyPastQuizPage quizzes={quizzes} user={user} />} />
        <Route path="/start/:character" element={<StartQuizPage chars={characters} quizzes={quizzes}/>} />
        <Route path="/login" element={<AuthPage setUser={setUser} />} />
        
      </Routes>
    <footer><Footer /></footer>
    </div>
  );
}
