import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';

export default function Trending() {
  const trending = useSelector((store) => store.trending);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_TRENDING' });
  }, []);

  return (
    <>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'baseline',
        }}
      >
        <h2>GIPHY Trending</h2>
        <ImageList
          sx={{ width: '75vw', textAlign: 'center' }}
          variant='masonry'
          cols={4}
          gap={8}
        >
          {trending.map((gifItem, i) => (
            <ImageListItem key={i}>
              <img
                srcSet={`${gifItem.images.original.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${gifItem.images.original.url}?w=248&fit=crop&auto=format`}
                alt={gifItem.title}
                loading='eager'
              />
              <ImageListItemBar
                sx={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                }}
                position='top'
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    onClick={(e) => {
                      e.target.style = 'color:yellow';
                      dispatch({
                        type: 'ADD_FAVORITE',
                        payload: {
                          gif_name: gifItem.title,
                          gif_url: gifItem.images.original.url,
                        },
                      });
                    }}
                  >
                    <StarIcon />
                  </IconButton>
                }
                actionPosition='right'
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </>
  );
}
