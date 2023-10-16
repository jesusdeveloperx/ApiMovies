const express = require('express');
const { connectDb } = require('./src/utils/database');
const routerMovie = require('./src/api/routes/movie.routes');
const app = express();
//ESTAS CONFIGURACIONES NOS SIRVEN PARA RECIBIR OBJETOS DE TIPO JSON
app.use(express.json());

connectDb()

app.use('/movie', routerMovie)


const PORT = 5055;
app.listen(PORT, () =>{
    console.log('Escuchando por el puerto' + PORT);
});