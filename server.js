const express = require('express');
const path = require('path');
const app = express();

let PORT = process.env.NODE_PORT || 3000;

app.use(express.static(path.resolve(`${__dirname}`)));
app.get('/*', (req, res) => res.sendFile(path.resolve(`${__dirname}/index.html`)));
app.listen(3000, () => console.log(`Application listening on port ${PORT}!`));