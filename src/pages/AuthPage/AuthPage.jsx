import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css'

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main className='AuthPage'>
      <h1>Welcome to Quiztendo Universe</h1>
      <h2>How much do you really know about the gang?</h2>
      <img src="https://upload.wikimedia.org/wikipedia/en/3/30/Mario_characters.png" alt="mario characters" />
      <br />
      { showSignUp ?
          <SignUpForm setUser={setUser} />
          :
          <LoginForm setUser={setUser} />
        }
        <span>Or click here to {showSignUp ? 'Log In' : 'Sign Up'}!<button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button> </span>
    </main>
  );
}