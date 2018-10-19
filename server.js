const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello'));

// process.env.PORT is for heroku
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
