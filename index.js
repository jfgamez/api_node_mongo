'use sctrict'
const express = require('express');

const app = express();
const port = process.env.PORT || 3001;
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// app.get('/hola/:name', (req, res) => {
//     res.send({message: `Hola ${ req.params.name }`});
// });

app.get('/api/product', (req, res) => {
    res.status(200).send( {products: []});
});

app.get('/api/product/:productId', (req, res) => {

});

app.post('/api/product', (req, res) => {
    console.log(req.body);
    res.status(200).send({message: 'El producto se ha recibido'});
});

app.put('/api/product/:productId', (req, res) => {

});

app.delete('/api/product/:productId', (req, res) => {

});

app.listen(port, () => {
    console.log(`Corriendo en http://localhost: ${port}`);
});