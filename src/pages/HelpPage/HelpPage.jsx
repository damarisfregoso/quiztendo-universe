// import * as usersService from'../../utilities/users-service';
import './HelpPage.css'
import { Link } from 'react-router-dom';

export default function HelpPage() {
  return (
    <div className="HelpPage">
      <h1>Guide to play Quiztendo Universe</h1>
      <ol>
        <li style={{color: 'red'}}>Choose a character you would like to test your knowledge for.</li>
        <li>Once you select a quiz you will have multiple choice options.</li>
        <li style={{color: 'red'}}>Take the test, try your hardest!</li>
        <li>Results will show up on the leader board.</li>
        <li style={{color: 'red'}}><Link className='click' to='/leaderboard'>Click here to view leader board </Link></li>
      </ol>

      <Link to='/'><button>Choose a Character</button></Link>
    </div>
  )
}