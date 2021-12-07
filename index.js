const path = require('path');
const { request } = require('express');
const express = require('express');
const restaurantsRouter = require('./routes/restaurants');
const indexRouter = require('./routes');

const logger = require('./middleware/logger');
const { engine } = require('express-handlebars');
const app = express();

//Template engine
app.engine('hbs', engine({ extname: 'hbs'}));
app.set('view engine', 'hbs');

//Midleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());//ทำให้เราอ่านข้อมูลของ jsonได้
app.use(express.urlencoded({ extended: false} ));
//custom middleware
app.use(logger);
//Router
app.use('/apis/restaurants', restaurantsRouter);
app.use('/',indexRouter);

 app.listen(3000, () => {
     console.log('Listening to port 3000');
 });