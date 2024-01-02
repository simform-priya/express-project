const express = require('express');
const path = require('path');
const app = express();
app.set('view engine' , 'hbs');
app.set('views', path.join(__dirname, 'views'));
const PORT = 3000;

const friendRouter = require('./Routes/friend.router');
const messageRouter = require('./Routes/message.router');

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const end = Date.now() - start;
    console.log(`${req.method} ${req.url} ${end}ms`)
});

app.use('/site' , express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Hello My Friends',
        caption: 'We are glad to see here!!'
    })
})

app.use(express.json());

app.use('/friend', friendRouter);

app.use('/message', messageRouter);

app.listen(PORT, () => {
    console.log(`Listning on ${PORT}..`);
})