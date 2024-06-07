import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import DeleteIcon from '@mui/icons-material/Delete';

export default function FavoritesItem({ favorite }) {
  const categories = useSelector((store) => store.categories);
  const [selectCategory, setSelectCategory] = useState({});
  const dispatch = useDispatch();

  const handleChange = (event) => {
    console.log('change from dropdown', event.target.value);
    setSelectCategory(event.target.value);
    dispatch({
      type: 'SET_CATEGORY',
      payload: { id: favorite.id, category_id: event.target.value },
    });
  };

  const deleteFav = (favId) => {
    dispatch({ type: 'DELETE_FAVORITE', payload: favId });
  };

  return (
    <Card
      sx={{ width: 300, minHeight: 350 }}
      key={favorite.id}
      id='card'
    >
      <CardMedia
        sx={{ height: 200 }}
        component='img'
        image={favorite.gif_url}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant='subtitle1'
          component='div'
        >
          {favorite.gif_name}
        </Typography>
      </CardContent>
      <CardActions>
        <div id='dropdown'>
          <FormControl sx={{ m: 1, minWidth: 140 }}>
            <InputLabel>Category</InputLabel>
            <Select
              defaultValue={favorite.category_id}
              label='Category'
              onChange={handleChange}
            >
              {categories.map((category) => (
                <MenuItem
                  key={category.id}
                  value={category.id}
                >
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <Button
          startIcon={<DeleteIcon />}
          size='small'
          variant='outlined'
          color='error'
          onClick={() => deleteFav(favorite.id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}