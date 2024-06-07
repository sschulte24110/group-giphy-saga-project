
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import './Search.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Search() {
  const dispatch = useDispatch();
  const gifReturn = useSelector((store) => store.search);

  const favoriteGif = (gifInfo) => {
    dispatch({
      type: 'ADD_FAVORITE',
      payload: {
        gif_name: gifInfo.title,
        gif_url: gifInfo.images.original.url,
      },
    });
    console.log('gif data', gifInfo);
  };

  return (
    <Container>
      <h4>Giphy Search</h4>
      {gifReturn.map((gif) => (
        <Card
          key={gif.id}
          sx={{ width: 300, height: 350 }}
          id='card'
        >
          <CardMedia
            component='img'
            height='200'
            width='200'
            image={gif.images.original.url}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant='h6'
              component='div'
            >
              {gif.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => {
                favoriteGif(gif);
              }}
              size='small'
            >
              Favorite
            </Button>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
}
