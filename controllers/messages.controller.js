const path = require('path');

function getMessage(req, res) {
    res.render('messages', {
        title: 'Hello Friends!!',
        name: 'Priya'
    })
};

function postMessage (req, res){
    console.log('Hello');
}

module.exports = {
    getMessage,
    postMessage
}