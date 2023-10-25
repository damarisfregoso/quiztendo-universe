import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as resultsAPI from '../../utilities/results-api';
import QuestionDisplay from '../../components/QuestionDisplay/QuestionDisplay';
import FinalResult from '../../components/FinalResult/FinalResult';
import './QuizPage.css';

export default function QuizPage() {
  const { quizId } = useParams();
  const [quizResult, setQuizResult] = useState(null);
  const curQuestion = quizResult?.quiz.questions[quizResult?.answers.length];
  // console.log(curQuestion);
  const score = quizResult?.score

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

  async function handleChoice(choiceId) {
    const updatedQuizResult = await resultsAPI.makeChoice(quizResult._id, choiceId);
    setQuizResult(updatedQuizResult);
  }

  return (
    <section className="QuizPage">
      <h1>{quizResult.quiz.title}</h1>
      { quizResult.inProgress ? 
      <QuestionDisplay question={curQuestion} handleChoice={handleChoice}/>
      :
      <FinalResult quizResult={quizResult}/>
    }
    </section>
  );
}