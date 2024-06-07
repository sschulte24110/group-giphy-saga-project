import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import Trending from '../Trending/Trending';
import Search from '../Search/Search';
import Favorites from '../Favorites/Favorites';
import Header from '../Header/Header';
import './app.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route
          exact
          path='/'
        >
          <Trending />
        </Route>
        <Route path='/search'>
          <Search />
        </Route>

        <Route
          exact
          path='/favorites'
        >
          <Favorites />
        </Route>
      </Router>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
}

export default App;
