import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import TrendingGifCard from './TrendingGifCard';

export default function Trending() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_TRENDING' });
  }, []);

  return (
    <>
      <Grid
        container
        spacing={4}
      >
        <TrendingGifCard />
      </Grid>
    </>
  );
}
