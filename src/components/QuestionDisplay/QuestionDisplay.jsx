import './QuestionDisplay.css'

export default function QuestionDisplay({ question, handleChoice  }) {

  console.log('does this work', question);

  return(
    <section>
      <h2 className='tracking'>Question {question.sequence} of 5</h2>
      <div className="QuestionDisplay">
        <h3>{question.prompt}</h3>
        <ul>
          {question.choices.map((choice) => (
            <li onClick={() => handleChoice(choice._id)} key={choice.choice}> {choice.prompt}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}