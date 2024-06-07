import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function SearchForm() {
  const dispatch = useDispatch();
  let [searchInput, setSearchInput] = useState('');

  const history = useHistory();

  const searchGifs = (event) => {
    dispatch({ type: 'FETCH_GIFS', payload: searchInput });
    setSearchInput('');
    history.push('/search');
  };

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <>
      <form onSubmit={(event) => searchGifs(event)}>
        <input
          type='text'
          placeholder='Search Gifs...'
          value={searchInput}
          onChange={handleSearch}
        />
        <Button
          color='secondary'
          type='submit'
        >
          Search
        </Button>
      </form>
    </>
  );
}
