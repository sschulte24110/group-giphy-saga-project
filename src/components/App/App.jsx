import { HashRouter as Router, Route, NavLink } from 'react-router-dom';

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
          <Favorites path='/favorites' />
        </Route>
      </Router>
    </div>
  );
}

export default App;
