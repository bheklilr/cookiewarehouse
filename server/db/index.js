const mongoose = require("mongoose");

mongoose
  .connect(
    process.env.MONGODB_URI ||
      '',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to mongo");
  })
  .catch(err => {
    console.log(`Failed to connect to mongo: ${err}`);
  });
