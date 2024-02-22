# LexaViva Backend

## Spanish Flashcards App
### Description
Find information about LexaViva's backend here: https://github.com/josecobi/lexaviva-frontend/blob/main/README.md

The Spanish Flashcards App is a web application designed to facilitate the learning of Spanish words using flashcards. The app provides a user-friendly interface for studying and practicing Spanish vocabulary.
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

The backend utilizes Express to create the server, Mongoose to interact with the MongoDB database, and CORS for handling cross-origin resource sharing. Additionally, the server is configured to handle errors with a custom error-handling middleware.

### Getting Started
Prerequisites

    Node.js
    MongoDB
    Mongoose
    Expressjs

Installation

    Clone the repository: git clone https://github.com/your-username/spanish-flashcards-app.git
    Navigate to the project directory: cd spanish-flashcards-app
    Install dependencies for the backend: npm install
    Navigate to the frontend directory: cd client
    Install dependencies for the frontend: npm install

Usage

    Start the backend server: npm start (in the root directory)
    Start the frontend development server: npm start (inside the client directory)
    Open your browser and go to http://localhost:3000 to access the Spanish Flashcards App.


    ### Contact
    Jose Lopez Cobano (CobiDev) jose.lopez.cobano@gmail.com