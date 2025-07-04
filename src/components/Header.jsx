import { Link } from 'react-router-dom';

function Header() {
  return (
    <header id="header">
      <h1>NEOFOLDER</h1>
      <ul className="menu">
        <li className="item">
          <Link to="/">Inicio</Link>
        </li>
        <li className="item">
          <Link to="/portafolio">Portafolio</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;