var express = require('express');
var router = express.Router();
var Message = require('../models/message');
var jwt = require('jsonwebtoken');
var User = require('./user');

router.get('/', function(req, res, next) {
    Message.find()
        .exec()
        .then(function(result) { //don't use plain .exce(function(err, result))// might not work in fetching
            console.log('no error from mongo');
            res.status(200).json({
                title: 'Success',
                obj: result
            });
        })
        .catch(function(err) {
            console.log('Received error from mongo');
            return res.status(500).json({
                title: 'Error getting messages',
                error: err
            });
        });
});

router.use('/', function(req, res, next) {
    jwt.verify(req.query.token, 'secretkey', function(err, decoded) {
        if (err) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: err
            });
        }
        next();
    });
});

router.post('/', function(req, res, next) {
    var decoded = jwt.decode(req.query.token);
    User.findById(decoded.user._id, function(err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        var message = new Message({
            content: req.body.content,
            user: user
        });
        message.save(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            user.messages.push(result);
            user.save();
            res.status(201).json({
                message: 'Saved message',
                obj: result
            });
        });
    });
});
router.patch('/:id', function(req, res, next) {
    Message.findById(req.params.id, function(err, message) {
        if (err) {
            return res.status(500).json({
                title: 'An error Occured',
                error: err
            });
        }
        if (!message) {
            return res.status(500).json({
                title: 'No message Found',
                error: { message: 'message not found' }
            });
        }
        message.content = req.body.content;
        message.save(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occured',
                    error: err
                });
            }
            res.status(200).json({
                title: 'Updated Message',
                obj: result
            });
        });
    });
});
router.delete('/:messageId', function(req, res, next) {
    const { messageId } = req.params;
    Message.findByIdAndRemove(messageId)
        .then(oldMessage => {
            res.status(OK).json({
                success: true,
                msg: 'Message deleted successfully',
                payload: oldMessage
            });
        })
        .catch(next);
});

module.exports = router;