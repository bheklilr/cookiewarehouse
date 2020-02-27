const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use(express.static('client/build'));

// Run
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
