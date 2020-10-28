const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');

// Archivos publicos estaticos
app.use(express.static(path.join(__dirname, '/public')));

app.use(morgan('dev'));
app.use(cors());
app.set('port', process.env.PORT || 4500);


app.use(require('./routes/index'));

// Servidor corriendo
app.listen(app.get('port'), ()=> {
    console.log(`Servidor escuchando el puerto ${app.get('port')}`);
});
