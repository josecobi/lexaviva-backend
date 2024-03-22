import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from "mongoose";
import wordRouter from './routes/words_route.mjs';
import error from "./utilities/error.mjs";
// import insertExampleData from './utilities/insert_example_data.mjs';
import morgan from 'morgan';
import cors from 'cors';
const app = express();
app.use(morgan('dev'));
const port = process.env.PORT || 3000;


// Connect to the database
await mongoose.connect(process.env.ATLAS_URI);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.on("open", () => {
    console.log("Database connected");
});

const corsOptions = {
  origin: ['https://lexaviva.onrender.com', 'https://lexaviva.onrender.com/MyTopics', 'https://lexaviva-backend.vercel.app//words/update/:id'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.options('*', cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/words", wordRouter);

// insertExampleData();

// 404 Middleware
app.use((req, res, next) => {
  next(error(404, "Resource Not Found"));
});

// Error-handling middleware.
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});


