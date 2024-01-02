
const frineds = require('../models/friend.model');
function getFriends(req, res){
    res.json(frineds);
}

function getSingleFriend (req, res){
    const frndId = Number(req.params.id) - 1;
    const friend = frineds[frndId];
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(400).json({
            error: 'Friend does not exist'
        })
    }
}

function postFriends (req, res) {
    if (!req.body.name) {
     return  res.status(400).json({
            error: 'Missing name property'
        })
    }
    const newFriend = {
        name: req.body.name,
        id: frineds.length + 1
    };

    frineds.push(newFriend);
    res.json(newFriend);
}


module.exports = {
    getFriends,
    getSingleFriend,
    postFriends
}