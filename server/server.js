require('dotenv').config();
const express = require('express');
const app = express();
const favoriteRouter = require('./routes/favorite.router');
const categoryRouter = require('./routes/category.router');
const trendingRouter = require('./routes/trending.router');
const PORT = process.env.PORT || 5001;

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/api/favorites', favoriteRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/trending', trendingRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
