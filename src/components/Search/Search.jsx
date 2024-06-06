import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";


export default function Search() {
  const dispatch = useDispatch();
  let [search, setSearch] = useState('');
  const gifReturn = useSelector(store => store.search);

  useEffect(() => {
    dispatch({type: 'FETCH_SEARCH'})
  }, [])


  const searchQuery = (event) => {
    dispatch({type: 'FETCH_SEARCH', payload: search})
    setSearch('');
  }
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }
  return (
    <>
      <h1>Search Page</h1>
      <h3>Search:</h3>
      <form onSubmit={(event) => searchQuery(event)}>
        <input type='text' placeholder='Search' value={search} onChange={handleSearch}/>
        <button type='submit' >Search</button>
      </form>
      <h4>Giphy Search</h4>
      
      {gifReturn.map(gif => (
        <div>
          <img src={gif.images.original.url}/>
          <h6>{gif.title}</h6>
        </div>
      ))}
      
    </>
  )
}