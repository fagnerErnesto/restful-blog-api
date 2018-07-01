const express = require('express');
const logger = require('morgan');
const errorHandler = require('errorhandler');
const bodyParser = require('body-parser');

const routes = require('./routes');

let store = {};
store.posts = [];

let app = express();

app.use(logger('dev'));
app.use(errorHandler());
app.use(bodyParser.json());

// routes from post
app.get('/posts', (req, res) => {
    routes.post.getPosts(req, res, store);
});

app.post('/posts', (req, res) => {
    routes.post.addPosts(req, res, store);
});

app.put('/posts/:postId', (req, res) => {
    routes.post.updatePosts(req, res, store);
});

app.delete('/posts/:postId', (req, res) => {
    routes.post.deletePost(req, res, store);
});

// routes from comments
app.get('/posts/:postId/comments', (req, res) => {
    routes.comment.getComments(req, res, store);
});

app.post('/posts/:postId/comments', (req, res) => {
    routes.comment.addComments(req, res, store);
});

app.put('/posts/:postId/comments/:commentId', (req, res) => {
    routes.comment.updateComments(req, res, store);
});

app.delete('/posts/:postId/comments/:commentId', (req, res) => {
    routes.comment.deleteComments(req, res, store);
});
app.listen(3000);