import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as resultsAPI from '../../utilities/results-api';
import './QuizPage.css';

export default function QuizPage() {
  const { quizId } = useParams();
  const [quizResult, setQuizResult] = useState(null);

  const curQuestion = quizResult?.quiz.questions[quizResult?.answers.length];
  console.log(curQuestion);
  useEffect(function () {
    async function getQuizResult() {
      try {
        const fetchedQuizResult = await resultsAPI.getForQuiz(quizId);
        setQuizResult(fetchedQuizResult)
      } catch (error) {
        console.error('Error fetching quiz:', error);
      }
    }
    getQuizResult();
  }, [quizId]);

  // Nothing to render if waiting on quizResult
  if (!quizResult) return null;

  return (
    <section className="QuizPage">
      <h2>{quizResult.quiz.title}</h2>
      //render <QuestionDisplay question={curQuestion} />
    </section>
  );
}