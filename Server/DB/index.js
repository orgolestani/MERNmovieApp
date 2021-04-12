const mongoose = require("mongoose");
// setting option to false in global scope to avoid use of deprecated functions
const DBConnectionString = process.env.DB;



mongoose
  .connect(DBConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
