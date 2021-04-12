const movieModel = require("../models/movie-model");
// full movie obecjt list

async function getAllMovies(req, res) {
  await movieModel.find((err, moviesData) => {
    if (err) {
      res.status(400).json({ success: false, error: err });
    }
    if (!moviesData.length) {
      res.status(400).json({ success: false, error: err });
    }
    console.log("result:", JSON.stringify(moviesData));
    res.status(200).json({ success: true, data: moviesData });
  });
}
// get movie/s by characters in movie name
async function getByMovieName(req, res) {
  let movieNameParam = req.params.movieName;
  await movieModel.find(
    { movieName: { $regex: movieNameParam, $options: "i" } },
    (err, moviesFoundObjs) => {
      if (err) throw err;
      console.log("results:", JSON.stringify(moviesFoundObjs));
      res.status(200).json({ success: true, data: moviesFoundObjs });
    }
  );
}
// insert new movie to movies collection
async function saveNewMovie(req, res) {
  let newMovie = req.body.movie;
  await movieModel.insertMany(newMovie, (err) => {
    if (err) throw err;
    console.log("Movie added:", JSON.stringify(newMovie));
    res.status(200).json({ success: true, data: newMovie });
  });
}
// Delete Movie using _id
async function deleteMovie(req, res) {
  let movieToDelete = req.params.movieId;
  await movieModel.findByIdAndDelete(movieToDelete, (err, doc) => {
    err && res.status(400).json({ success: false, error: err });
    doc === null &&
      res.status(400).json({ success: false, error: "not found" });
  });
}
//   update an existing movie
async function updateMovie(req, res) {
  let movieToUpdate = req.params.movieId;
  let newMovieInfo = req.body.movie;
 await movieModel.findByIdAndUpdate(movieToUpdate, newMovieInfo, (err, doc) => {
    if (err) throw err;
    console.log("Movie updated successfully:", doc);
    res.status(200).json({
      success: true,
      data: doc,
      message: "Movie updated successfully",
    });
  });
}

module.exports = {
  getAllMovies,
  getByMovieName,
  saveNewMovie,
  deleteMovie,
  updateMovie,
};

