import './QuizPage.css';
import { useParams } from "react-router-dom";

export default function QuizPage() {
  const { character } = useParams();

  return (
    <div className="QuizPage">
      <h1>{character}'s Quiz</h1>
    </div>
  );
}