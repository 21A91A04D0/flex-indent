const express = require('express');

const Router = express.Router();

const multer = require('multer')

const UserController = require('../controllers/UserController')


const uploadPath = multer({dest:'public/images/'})


Router.post('/api/addIndentUser', uploadPath.any(), UserController.indentUser);

Router.get('/api/getData', UserController.getIndentData);

module.exports = Router;