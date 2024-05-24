import path from 'path';
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from "mongoose";
import router from './routes/words_route.mjs';
import { insertSampleData } from './utilities/insert_sample_data.mjs';
import morgan from 'morgan';
import userRoutes from './routes/userRoutes.mjs';
import {notFound, errorHandler} from './middleware/error.mjs';
import cookieParser from 'cookie-parser';


const app = express();

const port = process.env.PORT || 3000;

// Connect to the database
await mongoose.connect(process.env.ATLAS_URI);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.on("open", () => {
    console.log("Database connected");
});


// Middleware
// app.use(cors(corsOptions));
app.use(morgan('dev'));
//In order to be able to get the data from the request body, we need to use the express.json() middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Middleware to access the cookies
app.use(cookieParser());

// Routes
app.use("/api/words", router);
app.use("/api/users", userRoutes);

if (process.env.NODE_ENV === 'production') {  
  app.use(express.static("dist"));
} else {
  app.get('/', (req, res) => res.send('Server is ready'));
}
// const userExample = await User.findOne({email: "example@example.com"});

//insertSampleData(userExample._id);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`App listening at ${port}`);
});