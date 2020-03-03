const express = require("express");
require('./db');
const app = express();
const routes = require('./routes');

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use(express.static('client/build'));
app.use('/api', routes);

// Run
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
