const movieCtrl = require("../controllers/movie-ctrl");
const moviesRouter = require("express").Router();

// acces to database model for old functions
moviesRouter.get("/all", movieCtrl.getAllMovies);
// access single or multiple movies by contained characters(insennsitive to capitals letters)
moviesRouter.get("/movie/:movieName", movieCtrl.getByMovieName);
// insert new movie to movies collection
moviesRouter.post("/saveMovie", movieCtrl.saveNewMovie);
// Delete Movie using _id
moviesRouter.delete("/movie/:movieId", movieCtrl.deleteMovie);
//   update an existing movie
moviesRouter.put("/movie/:movieId", movieCtrl.updateMovie);


module.exports = moviesRouter;
