import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from "mongoose";
import wordRoutes from './routes/words_routes.mjs';
import { insertSampleData } from './utilities/insert_sample_data.mjs';
import morgan from 'morgan';
import userRoutes from './routes/userRoutes.mjs';
import demoRoutes from './routes/demoRoutes.mjs';
import {notFound, errorHandler} from './middleware/error.mjs';
import cookieParser from 'cookie-parser';
import freepikRoutes from './routes/freepikRoutes.mjs';
import path from 'path';
import { fileURLToPath } from 'url';

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
app.use(morgan('dev'));
//In order to be able to get the data from the request body, we need to use the express.json() middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Middleware to access the cookies
app.use(cookieParser());

// Routes
app.use("/api/freepik", freepikRoutes);
app.use("/api/words", wordRoutes);
app.use("/api/users", userRoutes);
app.use("/demo", demoRoutes);
// app.use("/api/images", imageStoreRoutes);

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === 'production') {
  // Serve static files from the React app
  app.use(express.static(path.join(__dirname, 'dist')));

  // Catch-all handler to serve React's index.html file for any request that isn't an API call
  app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
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