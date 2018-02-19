// set up express server that will fetch data from postgresql
const express = require('express');
const { Pool } = require('pg');
const PORT = 80;
const app = express();

const pool = new Pool({ user: 'postgres', host: 'db'}); // we can just do 'db' cuz compose create DNS

app.get('/', (req, res) => {
  poll.query('SELECT * FROM apparel', (err, resFromPostgres) => {
    res.json(resFromPostgres.rows)
  });
});

app.listen(PORT, () => {
  console.log(`express server is listing to PORT: ${PORT}`);
});


