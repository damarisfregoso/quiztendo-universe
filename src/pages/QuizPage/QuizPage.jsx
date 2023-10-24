import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as quizzesAPI from '../../utilities/quizzes-api';
import './QuizPage.css';

export default function QuizPage({ quizzes }) {
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState(null); 

  useEffect(function () {
    async function getQuiz() {
      try {
        const fetchedQuiz = await quizzesAPI.getOne(quizId);
        if (fetchedQuiz) {
          setQuiz(fetchedQuiz)
        }
      } catch (error) {
        console.error('Error fetching quiz:', error);
      }
    }
    getQuiz();
  }, [quizId]);

  return (
    <div className="QuizPage">
      {quiz ? (
        <h1>{quiz.title}</h1>
        // Render other quiz content here
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}