import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import './Search.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function Search() {
  const dispatch = useDispatch();
  let [search, setSearch] = useState('');
  const gifReturn = useSelector((store) => store.search);

  useEffect(() => {
    dispatch({ type: 'FETCH_SEARCH' });
  }, []);

  const searchQuery = (event) => {
    dispatch({ type: 'FETCH_SEARCH', payload: search });
    setSearch('');
  };
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <>
      <h1>Search Page</h1>
      <h3>Search:</h3>
      <form onSubmit={(event) => searchQuery(event)}>
        <input
          type='text'
          placeholder='Search'
          value={search}
          onChange={handleSearch}
        />
        <button type='submit'>Search</button>
      </form>
      <h4>Giphy Search</h4>

      {/* {gifReturn.map((gif) => (
        <div>
          <h6>{gif.title}</h6>
          <h6>{gif.url}</h6>
          <img src={gif.images.original.url} />
        </div>
      ))} */}

      {gifReturn.map((gif) => (
        <Grid>
        <Card sx={{ maxWidth: 345}}>
          <CardMedia
          component='img'
          height='200'
          width='200'
          image={gif.images.original.url}
          />
          <CardContent>
            <Typography gutterBottom variant='h6' component='div'>
              {gif.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Favorite</Button>
          </CardActions>
        </Card>
        </Grid>
      ))}
    </>
  );
}
