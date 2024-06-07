import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import Search from '../Search/Search';

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
        <Route>
          <Favorites path='/favorites' />
        </Route>
      </Router>
    </div>
  );
}

export default App;
