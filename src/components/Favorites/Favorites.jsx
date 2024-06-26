
import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import Container from '@mui/material/Container';
import FavoritesItem from '../FavoritesItem/FavoritesItem';

export default function Favorites() {
    const dispatch = useDispatch();
    const favorites = useSelector(store => store.favorites);
    console.log(favorites);

    useEffect(() => {
        dispatch({ type: 'FETCH_FAVORITES' });
        dispatch({ type: 'FETCH_CATEGORIES' })
    }, []);

    return (
      <Container>
        <h2>Favorite GIFs</h2>
        {favorites.map((favorite) => (
          <FavoritesItem
            key={favorite.id}
            favorite={favorite}
          />
        ))}
      </Container>
    );
}

