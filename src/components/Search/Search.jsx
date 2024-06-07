
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import './Search.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Search() {
  const dispatch = useDispatch();
  let [searchInput, setSearchInput] = useState('');
  const gifReturn = useSelector((store) => store.search);

  const searchGifs = (event) => {
    dispatch({ type: 'FETCH_GIFS', payload: searchInput });
    setSearchInput('');
  };
  
  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

  const favoriteGif = (gifInfo) => {
    dispatch({ type: 'ADD_FAVORITE', payload: {gif_name: gifInfo.title, gif_url: gifInfo.images.original.url }})
    console.log('gif data', gifInfo);
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
        <Card key={gif.id} sx={{ width: 300, height: 350}} id='card'>
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
            <Button onClick={() => {favoriteGif(gif)}} size='small'>Favorite</Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}
