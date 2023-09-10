
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'url';
import express from 'express';
import { rateLimit } from 'express-rate-limit';
import votes from './controllers/votes.js';
const app = express();

const __filename = fileURLToPath(import.meta.url);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const getLimiter = rateLimit({
  windowMs: 1*60*1000,
  max: 20,
  message: "Max Limit of Get Requests Received",
  standardHeaders: 'draft-7'
});

app.get('/', getLimiter, function (req, res) {
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