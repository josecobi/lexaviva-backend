import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from "mongoose";
import router from './routes/words_route.mjs';
import { insertSampleData } from './utilities/insert_sample_data.mjs';
import morgan from 'morgan';
import cors from 'cors';
import userRoutes from './routes/userRoutes.mjs';
import {notFound, errorHandler} from './middleware/error.mjs';
import cookieParser from 'cookie-parser';
import User from "./models/userModel.mjs"

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
  origin: ['https://lexaviva.onrender.com', 'http://localhost:5173', 'https://lexaviva-backend.vercel.app/'], 
  credentials: true,// allow the browser to include credentials in requests
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204
}


// Middleware
app.use(cors(corsOptions));

//In order to be able to get the data from the request body, we need to use the express.json() middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Middleware to access the cookies
app.use(cookieParser());

// Routes
app.use("/words", router);
app.use("/api/users", userRoutes);


// const userExample = await User.findOne({email: "example@example.com"});

//insertSampleData(userExample._id);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

