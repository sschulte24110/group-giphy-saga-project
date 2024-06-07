import { CardMedia, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import { useSelector } from 'react-redux';

export default function TrendingGifCard() {
  const trending = useSelector((store) => store.trending);

  return (
    <>
      {trending.map((gif, i) => (
        // <Grid xs={3}>
        <Card
          key={i}
          //   sx={{ maxHeight: '200px' }}
        >
          <CardMedia
            component='img'
            image={gif.images.original.url}
            alt={gif.title}
          />
        </Card>
        // </Grid>
      ))}
    </>
  );
}
