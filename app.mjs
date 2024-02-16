import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from "mongoose";
import Word from './models/word.mjs';

const app = express();
const port = process.env.PORT || 3000;

await mongoose.connect(process.env.ATLAS_URI);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.on("open", () => {
    console.log("Database connected");
});

app.get("/words", async (req, res) => {
    const words = await Word.find({});
    res.json(words);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

