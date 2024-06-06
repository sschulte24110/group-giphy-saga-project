// const express = require('express');
// const axios = require('axios');
// const router = express.Router();

// const GIPHY_API_KEY = process.env.GIPHY_API_KEY;

// router.get('/', async (req, res) => {
//   try {
//     const result = await axios.get(
//       `http://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}`
//     );
//     res.send(result.data.data);
//   } catch (err) {
//     console.log(`Error on GETting trending: ${err}`);
//     res.sendStatus(500);
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
  const GIPHY_API_KEY = process.env.GIPHY_API_KEY;

  try {
    const response = await axios.get(
      `http://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}`
    );
    res.send(response.data.data);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports = router;
