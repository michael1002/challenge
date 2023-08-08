const express = require('express')
const router = express.Router()
const post = require('../models/post.model')
const middleware = require('../helpers/middlewares')
// Routes
module.exports = router

/* All posts */
router.get('/', async (req, res) => {
  await post.getPosts()
    .then((posts) => {
      res.json(posts);
    })
    .catch(err => {
      if (err.status) {
        res.status(err.status).json({ message: err.message })
      } else {
        res.status(500).json({ message: err.message })
      }
    })
})

/* A post by id */
router.get('/:id', middleware.mustBeInteger, async (req, res) => {
  const id = req.params.id

  await post.getPost(id)
    .then(post => res.json(post))
    .catch(err => {
      if (err.status) {
        res.status(err.status).json({ message: err.message })
      } else {
        res.status(500).json({ message: err.message })
      }
    })
})