const path = require ('path');
const express = require ('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();


//CONECTANDO LA BASE DE DATOS
mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db=>console.log('Db connected'))
    .catch(err=>console.log(err));
    
//IMPORT ROUTES
const indexRoutes = require('./routes/index');

//SETTINGS
app.set('port',process.env.PORT || 3000 );
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
//MIDLEWARES
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));//para que el servidor entienda el formati json.
//ROUTES
app.use('/',indexRoutes);
//STATING THE SERVER
app.listen(app.get('port'),()=>{
console.log(`Server on port ${app.get('port')}`);
});

