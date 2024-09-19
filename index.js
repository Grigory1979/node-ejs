const express = require('express');
const bodyParser = require("body-parser");

const errorMiddleware = require('./middleware/error');

const indexRouter = require('./routes/index');
const bookApiRouter = require('./routes/api/book');
const bookRouter = require('./routes/book');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set("view engine", "ejs");

app.use('/', indexRouter);
app.use('/test', indexRouter);
app.use('/book', bookRouter);
app.use('/api/book', bookApiRouter);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('=== start server ===');
    console.log(`=== PORT ${PORT} ===`);
});