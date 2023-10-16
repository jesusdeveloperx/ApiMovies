const mongoose = require('mongoose');

const url = 'mongodb+srv://jesus:jesus@cluster0.u451cao.mongodb.net/movie?retryWrites=true&w=majority';
const connectDb = async() =>{
    try {
       const db = await mongoose.connect(url, {
            useNewUrlParser : true,
            useUnifiedTopology : true
       }) 
       const { name, host } = db.connection;
       console.log(`Nombre de la BD ${name} host ${host}`);
    } catch (error) {
        console.log(error);
    }

}

module.exports = { connectDb }