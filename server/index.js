import express, { urlencoded, json } from "express";
import './db';
const app = express();
import routes from './routes';

const PORT = process.env.PORT || 5000;

app.use(urlencoded({ extended: true }));
app.use(json());

// Routes
app.use(express.static('client/build'));
app.use('/api', routes);

// Run
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
