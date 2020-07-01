const Express = require('express');
var app = Express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const registerRouter = require('./routes/registerRouter');
const detailsRouter = require('./routes/detailsRouter');
const loginRouter = require('./routes/loginRouter');
const logoutRouter = require('./routes/logoutRouter');

const url = 'mongodb://localhost:27017/portal';
const connect = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
app.use('/register', registerRouter);
app.use('/details', detailsRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);

//app.use(express.static(__dirname)+'/public');

// connect.then(db) => {
//     console.log('connected to server');
// };

app.listen(3000, () => {
    console.log('server running');
})