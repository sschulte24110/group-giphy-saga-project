import { useSelector, useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';

export default function FavoriteIcon({ gifItem }) {
  const favorite = useSelector((store) => store.favorites);
  const dispatch = useDispatch();

  console.log();

  return (
    <>
      {favorite.map((favItem) => {
        return console.log(favItem.gif_name);
        console.log(gifItem.title);
        // gifItem.title === favItem.gif_name ? (
        //   <IconButton
        //     sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
        //     onClick={() => dispatch({ type: 'ADD_FAVORITE' })}
        //   >
        //     <StarIcon />
        //   </IconButton>
        // ) : (
        //   <IconButton
        //     sx={{ color: 'yellow' }}
        //     disabled
        //   >
        //     <StarOutlineIcon />
        //   </IconButton>
        // );
      })}
    </>
  );
}
