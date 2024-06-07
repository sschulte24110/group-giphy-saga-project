const pool = require('../modules/pool')
const express = require('express');
const router = express.Router();
const axios = require('axios');

 router.get('/:search', (req, res) => {
  const GIPHY_API_KEY = process.env.GIPHY_API_KEY;
  console.log(GIPHY_API_KEY);
  const searchQuery = req.params.search;
  console.log(searchQuery);
 // https://api.giphy.com/v1/gifs/search?api_key=C4SWFxNbjLRDKEXZjAECdm4zFmYtMAFq&q=dogsd
  axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${searchQuery}`)
  .then((response) => {
    console.log(response.data.data);
    res.send(response.data.data);
  }).catch((error) => {
    // console.error(error)
    res.sendStatus(500);
  })
 })

 module.exports = router;