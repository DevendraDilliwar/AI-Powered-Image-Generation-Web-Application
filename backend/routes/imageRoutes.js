const express = require('express');
const { generateImage } = require('../controllers/imageController');
const userAuth = require('../middleware/auth');

const imageRouter = express.Router();

imageRouter.post('/generate-image', userAuth  , generateImage);

module.exports = imageRouter;