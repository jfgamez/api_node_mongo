'use sctrict'
const express = require('express');

const app = express();
const port = 3000;
const morgan = require('morgan');

app.use(morgan('dev'));
app.listen(port, () => {
    console.log('Corriendo en http://localhost:',port);
});