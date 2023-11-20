import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import Routes from './routes/route.js';
import bodyParser from 'body-parser';
const app = express();

dotenv.config();
const PORT = 8000;


app.use(bodyParser.json({ extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());
app.use('/', Routes);

// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;

Connection();

app.listen(PORT, () => {
    console.log("Server is running on port 8000");
});
