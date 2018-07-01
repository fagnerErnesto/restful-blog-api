module.exports = {
    getPosts(req, res, store) {
        res.status(200).send(store.posts)
    },
    addPosts(req, res, store) {
        var id = store.posts.length;
        var post = {
            "name": req.body.name,
            "url": req.body.url,
            "text": req.body.text,
            "comments": []
        }
        store.posts.push(post);
        store.posts[id].comments = [];
        res.status(201).send({"id":id});
    },
    updatePosts(req, res, store) {
        var id = req.params.postId;
        store.posts[id].name = req.body.name;
        store.posts[id].url = req.body.url;
        store.posts[id].text = req.body.text;
        res.status(200).send(store.posts[id]);
    },
    deletePost(req, res, store) {
        var id = req.params.postId
        store.posts.splice(id, 1);
        res.status(204).send({"message":"Post was deleted!"});
    }
}

