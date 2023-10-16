const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const movieSchema = new Schema({
    title: {type: String, require: true},
    director: {type: String, require: true},
    year: {type: Number},
    genre: {type: String, require: true}
    
}, { 
    collection: 'movie'
});
//STRING, NUMBER, ARRAY, DATE, MIXED, BOOLEAN, OBJECTID

const Movie = mongoose.model('movie', movieSchema);
module.exports = Movie;