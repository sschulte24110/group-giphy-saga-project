import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Favorites() {
    const dispatch = useDispatch();
    const favorites = useSelector(store => store.favorites);
    console.log(favorites);

    useEffect(() => {
        dispatch({ type: 'FETCH_FAVORITES' })
    }, []);

    return (
        <>
        <h2>Favorite GIFs</h2>
        {favorites.map(favorite => (
            <Card sx={{ width: 300, height: 325 }} key={favorite.id} id="card">
                <CardMedia
                    sx={{ height: 200 }}
                    image={favorite.gif_url} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {favorite.gif_name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Remove</Button>
                </CardActions>
            </Card>
        ))}
        </>
    );
}