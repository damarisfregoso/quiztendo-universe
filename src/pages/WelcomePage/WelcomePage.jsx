import { Link, useNavigate } from 'react-router-dom';
import './WelcomePage.css'

export default function WelcomePage({ user, characters }) {

  const navigate = useNavigate();

  return (
    <div className='WelcomePage'>
      {user ? (
      <h1>Welcome {user.name} </h1>
      )
      : 
      <h1>Welcome to Quiztendo Universe</h1>
      }
      
      <h2>Choose a character to quiz for!</h2>
      <div className='select-characters'>
      {characters.map((character) => ( 
      <div className='single-characters' key={character.name}>
        {user ? (
          <Link to={`/start/${character.name}`}>
            <div>
              <img src={character.image} alt={character.name}/>
              <h3>{character.name}</h3>
            </div>
          </Link>
        ) : (
          <div onClick={() => navigate('/login')}>
            <img src={character.image} alt={character.name}/>
            <h3>{character.name}</h3>
          </div>
        )}
      </div>
      ))}
      </div>
    </div>
  );
}