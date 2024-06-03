# LexaViva Backend


### Description
Find information about LexaViva's front-end here: https://github.com/josecobi/lexaviva-frontend/blob/main/README.md

The LexaViva is a web application designed to facilitate the learning of Spanish words using flashcards. The app provides a user-friendly interface for studying and practicing Spanish vocabulary.
Backend

The backend of the application is built using Node.js, Express, and Mongoose. It serves as the API for managing Spanish words, topics, and related functionalities. Below are the main features of the backend:
Routes

The backend defines several routes to handle various operations on Spanish words:

    GET /words: Retrieve all words from the database.
    POST /words: Add a new word to the database.
    DELETE /words/delete/:id: Delete a word by its ID.
    PUT /words/update/:id: Update a word by its ID.
    DELETE /words/deleteAllByTopic/:topic: Delete all words based on their topic.
    POST /words/insertMany: Insert multiple words into the database.
    GET /words/topics: Get a list of topics with no duplicates.
    POST /words/bytopic: Get words by topic.

### Backend Setup

The backend utilizes Express to create the server, Mongoose to interact with the MongoDB database, and proxy for handling cross-origin resource sharing. Additionally, the server is configured to handle errors with a custom error-handling middleware.

### Getting Started
Prerequisites

    Node.js
    MongoDB
    Mongoose
    Expressjs

Installation

    Clone the repository: `git clone https://github.com/josecobi/lexaviva-backend.git`
    Navigate to the project directory: cd lexaviva-backend
    Install dependencies for the backend: npm install
    Set Up Environment Variables: Create a .env file in the root of your project directory and add the following environment variables. Make sure to replace the placeholder values with your actual configuration.
        `NODE_ENV=development
        ATLAS_URI=your_mongodb_atlas_uri
        PORT=5050
        JWT_SECRET=your_jwt_secret`
    Make syre you create a '.gitignore' file in the root directory of the backend and add '.env' to the document to avoid exposing your environment variables in case you push it to GitHub.

Usage

    Start the backend server: Run `npm start` (in the root directory)
    Open your browser and go to http://localhost:5050 to access the LexaViva App.

    If you make any changes in the front-end (the one you cloned from https://github.com/josecobi/lexaviva-frontend/blob/main/README.md), follow the following steps:
     - In the backend folder: Stop the server if it is running. Remove the 'dist' folder from the root directory.
     - In the frontend folder's terminal, run `npm run build`
     - Copy the 'dist' folder and paste it in the root directory of the backend folder.


    ### Contact
    Jose Lopez Cobano (CobiDev) jose.lopez.cobano@gmail.com