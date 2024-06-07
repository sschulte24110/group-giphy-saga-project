
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
  let [searchInput, setSearchInput] = useState('');
  const gifReturn = useSelector((store) => store.search);

  // Do I need this
  useEffect(() => {
    dispatch({ type: 'FETCH_GIFS' });
  }, []);

  const searchGifs = (event) => {
    dispatch({ type: 'FETCH_GIFS', payload: searchInput });
    setSearchInput('');
  };
  
  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

  const favoriteGif = (gif_url) => {
    dispatch({ type: 'ADD_FAVORITE', payload: gif_url})
  }

  return (
    <>
      <h1>Search Page</h1>
      <h3>Search:</h3>
      <form onSubmit={(event) => searchGifs(event)}>
        <input
          type='text'
          placeholder='Search Gifs...'
          value={searchInput}
          onChange={handleSearch}
        />
        <button type='submit'>Search</button>
      </form>
      <h4>Giphy Search</h4>

      {gifReturn.map((gif) => (
        <div>
          <h6>{gif.title}</h6>
          <h6>{gif.url}</h6>
          <img src={gif.images.original.url} />
          <button onClick={() => {favoriteGif(gif.images.original.url)}} >Favorite</button>
        </div>
      ))}

      {/* {gifReturn.map((gif) => (
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
      ))} */}
    </>
  );
}
