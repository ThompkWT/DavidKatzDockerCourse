const express = require('express');
const HOST = '0.0.0.0';
const PORT = '80';

const app = express();

app.get('/', (req, res) => {
  res.json({
    players: ['Justina', 'Carlee', 'Travis', 'Sophia', 'Ben'],
  });
});

app.listen(PORT, () => {
  console.log(`listening to ${HOST}:${PORT}`);
});