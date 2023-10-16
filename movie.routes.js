const express = require('express');
const {newMovie, getMovie, updateMovie} = require ('../controllers/movie.controller')

const router = express.Router();

router.post('/register', newMovie)//CREAR!
router.get('/', getMovie);
router.put('/:id', updateMovie);

module.exports = router