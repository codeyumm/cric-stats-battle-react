import { Link } from 'react-router-dom';
import './navBar.css';

export default function NavBar() {
  return (
    <header>
      <nav>

        <div className="logo">
          <img src="/images/wicket.png" alt="image of wicket" className='logo' />
          <Link to="/" id='logoText'>CricDirectory</Link>
        </div>

        <ul>
          <li><Link to="/about">About</Link></li>
        </ul>
        
      </nav>
    </header>
  );
}
