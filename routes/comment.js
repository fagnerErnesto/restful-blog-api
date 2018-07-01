module.exports = {
    getComments(req, res, store) {
        var comments = store.posts[req.params.postId].comments;
        res.status(200).send(comments);
    },
    addComments(req, res, store) {
        var id = store.posts[req.params.postId].comments.length;
        var text = {"text":req.body.text};
        store.posts[req.params.postId].comments.push(text);
        res.status(201).send({"id":id});
    },
    updateComments(req, res, store) {
        prm = req.params;
        store.posts[prm.postId].comments[prm.commentId] = req.body.text;
        res.status(200).send(store.posts[prm.postId]);
    },
    deleteComments(req, res, store) {
        prm = req.params;
        store.posts[prm.postId].comments.splice(prm.commentId, 1);
        res.status(200).send(store.posts[prm.postId]);
    }
}