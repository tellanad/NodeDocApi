const express = require('express')
const postController = require('../controllers/post')


const router = express.Router();

exports.router.get('/', postController.getPosts);

// exports.getPosts = (req,res) =>{
   
 
// }