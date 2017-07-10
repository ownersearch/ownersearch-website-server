const express = require('express');

const app = express();
const root = '/app/website/client';

app.use(express.static(root, { maxAge: 31536000000, index: false }));
app.use('/*', (req, res) => res.sendFile('/index.html', { root, maxAge: 0 }));

app.listen(3080);
