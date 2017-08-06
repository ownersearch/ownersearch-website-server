const express = require('express');
const morgan = require('morgan');

const app = express();
const root = '/app/website/dist';

app.use(morgan('dev'));

app.use('/api/ping', (req, res) => res.json());

app.use(express.static(root, { maxAge: 31536000000, index: false }));
app.use('/*', (req, res) => res.sendFile('/index.html', { root, maxAge: 0 }));

app.listen(3080);
