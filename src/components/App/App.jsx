import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import Favorites from '../Favorites/Favorites';
import "./app.css";

function App() {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <Router>
        {/* <Route
          exact
          path='/'
        >
          <Trending />
        </Route>
        <Route path='/search'>
          <Search />
        </Route> */}
        <Route exact path='/favorites'>
          <Favorites />
        </Route>
      </Router>
    </div>
  );
}

export default App;
