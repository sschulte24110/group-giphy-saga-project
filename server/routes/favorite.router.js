const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "favorites" ORDER BY id;`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('Error getting favorites', err);
      res.sendStatus(500);
    });
});

// add a new favorite
// Not tested in Postman since we didn't have any favorites
router.post('/', (req, res) => {
  const newFavorite = req.body;
  const queryText = `INSERT into "favorites" ("category_id", "gif_name", "gif_url") VALUES ($1, $2, $3);`;
  const queryValues = [
    newFavorite.category_id,
    newFavorite.gif_name,
    newFavorite.gif_url,
  ];
  pool
    .query(queryText, queryValues)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error POSTing new favorite`, error);
      res.sendStatus(500);
    });
});

// update a favorite's associated category
router.put('/:id', (req, res) => {
  console.log(req.body);
  // req.body should contain a category_id to add to this favorite image
  const queryText = `UPDATE "favorites" SET "category_id"=$2 WHERE id=$1;`;
  pool
    .query(queryText, [req.params.id, req.body.category_id])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error in put:`, error);
      res.sendStatus(500);
    });
});

// delete a favorite
router.delete('/:id', (req, res) => {
  const queryText = `DELETE FROM "favorites" WHERE id=$1;`;
  pool.query(queryText, [req.params.id])
  .then(() => {
    res.sendStatus(200);
  }).catch((error) => {
    console.log(`Error in DELETE favorite`, error);
    res.sendStatus(500);
  })
});

module.exports = router;
