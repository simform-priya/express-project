const express = require('express');

const friendsController = require('../controllers/friends.controller');


const friendRouter = express.Router();

friendRouter.get('/', friendsController.getFriends);
friendRouter.get('/:id', friendsController.getSingleFriend);
friendRouter.post('/', friendsController.postFriends);


module.exports = friendRouter;