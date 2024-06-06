import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

export default function Favorites() {
    const dispatch = useDispatch();
    const favorites = useSelector(store => store.favorites);
    const categories = useSelector(store => store.categories);
    console.log(favorites);

    useEffect(() => {
        dispatch({ type: 'FETCH_FAVORITES' });
        dispatch({ type: 'FETCH_CATEGORIES' })
    }, []);

    return (
        <>
        <h2>Favorite GIFs</h2>
        {favorites.map(favorite => (
            <Card sx={{ width: 300, height: 350 }} key={favorite.id} id="card">
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
                    <div id="dropdown">
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        placeholder='Category'
                        // value={age}
                        label="Category"
                        // onChange={handleChange}
                        >
                        {categories.map(category => (
                            <MenuItem>{category.name}</MenuItem>
                        ))}
                    </Select>
                    </div>
                </CardActions>
            </Card>
        ))}
        </>
    );
}