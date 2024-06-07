import { Link } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';

export default function Header() {
  return (
    <header>
      <h1>Giphy Gallery</h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/favorites'>Favorites</Link>
          </li>
        </ul>
      </nav>
      <SearchForm />
    </header>
  );
}
