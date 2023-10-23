import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import WelcomePage from '../WelcomePage/WelcomePage';
import HelpPage from '../HelpPage/HelpPage';
import QuizPage from '../QuizPage/QuizPage';
import characters from '../../utilities/character-image';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<WelcomePage user={user} characters={characters}/>} />
              <Route path="/help" element={<HelpPage />} />
              <Route path="/quiz/:character" element={<QuizPage chars={characters}/>} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
