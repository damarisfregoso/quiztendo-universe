import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import HelpPage from '../HelpPage/HelpPage';
import WelcomePage from '../WelcomePage/WelcomePage';
import QuizPage from '../QuizPage/QuizPage';
import characters from '../../utilities/character-image';
import StartQuizPage from '../StartQuizPage/StartQuizPage';
import * as quizzesAPI from '../../utilities/quizzes-api'
import LeadershipPage from '../LeadershipPage/LeadershipPage';
import './App.css';

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
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<WelcomePage user={user} characters={characters} quizzes={quizzes}/>} />
              <Route path="/help" element={<HelpPage />} />
              <Route path="/quiz/:quizId" element={<QuizPage />} />
              <Route path="/leadership" element={<LeadershipPage quizzes={quizzes} user={user} />} />
              <Route path="/start/:character" element={<StartQuizPage chars={characters} quizzes={quizzes}/>} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
