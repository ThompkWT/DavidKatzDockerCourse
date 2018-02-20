// set up express server that will fetch data from postgresql
const express = require('express');
const { Pool } = require('pg');
const PORT = 80;
const app = express();

const pool = new Pool({ user: 'postgres', host: 'db'}); // we can just do 'db' cuz compose create DNS

app.get('/', (req, res) => {
  pool.query('SELECT * FROM clothing', (err, resFromPostgres) => {
    // let testObj = resFromPostgres.rows;
    // console.log(Object.keys(testObj));
    // let keys = Object.keys(testObj);
    // keys.forEach((key) => {
    //   console.log('value: ', Object.keys(testObj[key]));
    // })
    // testObj = 'test!!!';
    resFromPostgres.rows.push({'yeah': 'yeah~~'})
    res.json(resFromPostgres.rows)
    // res.send('working??')
  });
});

app.listen(PORT, () => {
  console.log(`express server is listing to PORT: ${PORT}`);
});


