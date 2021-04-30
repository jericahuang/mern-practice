const router = require('express').Router();
let User = require('../models/movie.model');

router.route('/').get((req,res) => {
    Movie.find() //mongoose method that gets list of users
        .then(movies => res.json(movies))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) =>{
    const username = req.body.username;
    const title = req.body.title;
    const poster = req.body.poster;
    const rating = Number(req.body.rating);
    const genre = req.body.genre;
    const review = req.body.review;
    const year = Number(req.body.year);

    const newMovie = new Movie({
        username,
        title,
        poster,
        rating,
        genre,
        review,
        year
    });

    newMovie.save()
        .then(() => res.json('Movie added!'))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/:id').get((req, res) => {
    Movie.findById(req.params.id)
      .then(movie => res.json(movie))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Movie.findByIdAndDelete(req.params.id)
      .then(() => res.json('Movie deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    Movie.findById(req.params.id)
      .then(movie => {
        movie.username = req.body.username;
        movie.title = req.body.title;
        movie.poster = req.body.poster;
        movie.rating = Number(req.body.rating);
        movie.genre = req.body.genre;
        movie.review = req.body.review;
        movie.year = Number(req.body.year);
  
        movie.save()
          .then(() => res.json('Movie updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;