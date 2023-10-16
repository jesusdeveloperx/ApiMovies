const Movie = require('../models/movie.model');

const newMovie = async(req,res) =>{
    try {
        const body = req.body;
        const movie = new Movie(body);
        const createdMovie = await movie.save();
        return res.json(createdMovie)
    } catch (error) {
        return res.json(error)
        
    }
}
const getMovie = async(req,res) =>{
try {
    const movie = await Movie.find();
    return res.status(200).json(movie)
    
} catch {
    return res.json(error)
}
}

const updateMovie = async(req,res) =>{
    try {
        const {id} = req.params;
        const movieBody = new Movie(req.body);
        movieBody._id = id;
        const updateMovie = await Movie.findByIdAndUpdate(id, movieBody, {new: true});
        if(!updateMovie){
            return res.status(404).json({message: 'Esta movie no existe'});
        }
        return res.status(200).json(updateMovie)
    } catch (error) {
        
    }

}

module.exports = {newMovie, getMovie, updateMovie}