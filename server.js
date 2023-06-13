
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'url';
import express from 'express';
import votes from './controllers/votes.js';
const app = express();

const __filename = fileURLToPath(import.meta.url);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.sendFile(join(dirname(__filename), "./public/votes.html"));
})

app.post('/submit', async function (req, res) {
  var vote = req.body.BrownlowFavourites;
  var result = await votes(vote);
  res.json(result);
})

app.listen(3000, function () {
console.log("Listening at port 3000!");
})