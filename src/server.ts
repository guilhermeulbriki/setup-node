import express from 'express';

const app = express();

app.get('/', (request, response) => response.json({ message: 'Setup' }));

app.listen(3333);
