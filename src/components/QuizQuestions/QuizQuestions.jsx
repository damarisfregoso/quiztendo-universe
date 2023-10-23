import { useEffect, useState } from 'react';
import './QuizQuestions.css'

export default function QuizQuestions() {
  const [questions, setQuestions] = useState([]);

  useEffect (function() {
    async function getQuestions() {
      const questions = await postAPI.getAll();
      setQuestions(questions);
    }
    getQuestions();
  }, []);

  return (
    <div className='QuizQuestions'>

    </div>
  );
}