import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import Trending from '../Trending/Trending';
import Favorites from '../Favorites/Favorites';
import Search from '../Search/Search';

import "./app.css";

function App() {
  return (
    <div>
      <Router>
        <Route exact path='/'>
          <Trending />
        </Route>
        <Route path='/search'>
          <Search />
        </Route>
        <Route exact path='/favorites'>
          <Favorites />
        </Route>
      </Router>
    </div>
  );
}

export default App;
