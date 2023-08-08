const filename = '../data/posts.json'
let posts = require(filename)
const helper = require('../helpers/helper.js')

function getPosts() {
  return new Promise((resolve, reject) => {
    if (posts.length === 0) {
      reject({
        message: 'no posts available',
        status: 202
      })
    }
    resolve(posts)
  })
}

function getPost(id) {
  return new Promise((resolve, reject) => {
    helper.mustBeInArray(posts, id).then(post => resolve(post)).catch(err => reject(err))
  })
}
function insertPost(newPost) { }
function updatePost(id, newPost) { }
function deletePost(id) { }

module.exports = {
  insertPost,
  getPosts,
  getPost,
  updatePost,
  deletePost
}