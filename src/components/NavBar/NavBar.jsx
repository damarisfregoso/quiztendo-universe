import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import DarkMode from '../DarkMode/DarkMode';
import './NavBar.css'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className='NavBar'>
      <DarkMode />
      <span>
      {user ? 
        <>    
          <Link to="/help">Help</Link>
          &nbsp; | &nbsp;
          <Link to="/leaderboard">Leader Board</Link>
          &nbsp; | &nbsp;
          <Link to="/myquizzes">My Quizzes</Link>
          &nbsp; | &nbsp;
          <Link to="" onClick={handleLogOut}>Log Out</Link>
          &nbsp; | &nbsp;
          <Link to='/'><span>Welcome, {user.name} <img src="https://upload.wikimedia.org/wikipedia/en/3/30/Mario_characters.png" alt="mario characters" style={{ height: '20px'}}/></span></Link>
        </>
        :
        <Link to='/login'><span> Sign In<img src="https://upload.wikimedia.org/wikipedia/en/3/30/Mario_characters.png" alt="mario characters" style={{ height: '20px'}}/></span></Link>
      }
      </span>
    </nav>
  );
}