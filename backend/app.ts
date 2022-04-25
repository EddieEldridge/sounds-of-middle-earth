const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send({ application: 'sounds-of-middle-earth-backend', version: '1.0', route: 'default' });
});

app.get('/api/info', (req, res) => {
    res.send({ application: 'sounds-of-middle-earth-backend', version: '1.0', route: '/api/info' });
});

app.post('/api/v1/getback', (req, res) => {
    res.send({ ...req.body });
});

module.exports.handler = serverless(app);