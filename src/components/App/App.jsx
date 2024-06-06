import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import Trending from '../Trending/Trending';
import Favorite from '../Favorites/Favorites';
import Search from '../Search/Search';

function App() {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <Router>
        <Route
          exact
          path='/'
        >
          <Trending />
        </Route>
        <Route path='/search'>
          <Search />
        </Route>
        <Route>
          <Favorite path='/favorites' />
        </Route>
      </Router>
    </div>
  );
}

export default App;
