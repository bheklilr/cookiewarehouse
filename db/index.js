const mongoose = require("mongoose");

mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb://heroku_303x97p1:75fk94evijob7qdnidqae1osue@ds061360.mlab.com:61360/heroku_303x97p1",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to mongo");
  })
  .catch(err => {
    console.log(`Failed to connect to mongo: ${err}`);
  });
