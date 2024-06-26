const express = require('express');
const app = express();
const movies = require('./movies.json');
const port = process.env.PORT || 8000;

app.get('/movies', (req, res) => {
    // return res.json({
    //     message: 'API working!',
    // });
    return res.json(movies);
});

app.get('/movies/:id', (req, res) => {
    const { id } = req.params;
    const movie = movies.find(movie => movie.id === id);
    if(movie) {
        return res.json(movie);
    }
    return res.json({
        message: 'data not found',
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});