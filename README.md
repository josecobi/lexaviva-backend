# LexaViva Backend


### Description
Find information about LexaViva's front-end here: https://github.com/josecobi/lexaviva-frontend/blob/main/README.md

The LexaViva is a web application designed to facilitate the learning of Spanish words using flashcards. The app provides a user-friendly interface for studying and practicing Spanish vocabulary.
Backend

The backend of the application is built using Node.js, Express, Redux and Mongoose. It serves as the API for managing Spanish words, topics, and related functionalities. Below are the main features of the backend:
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
    A MongoDB instance

Installation

    Before you start:
2. Clone the repository to your local machine.
3. Install the necessary dependencies by running `npm install`.
4. Create a .env file with the following variables:
    - NODE_ENV=development
    - ATLAS_URI= [add your atlas URI here](whithout the quotes)
    - PORT=5050 (or any port of your choice)
    - JWT_SECRET=[create your own secret phrase](whithout the quotes)

5. Obtain an API Key: To interact with external API to get illustrations, you will need an API key from freepik.com. This API key allows the frontend app to make requests to the backend server and access the required resources. You can obtain a trial API key from freepik.com, which is usually available for free.
6. Store the API Key: Once you have obtained the API key, create the variable `FREEPIK_API_KEY` in the file `.env` and add the key to that variable.
    example: `FREEPIK_API_KEY= 4TNF9304NFDK490NKDJF`
    
7. Add the .env file to your project's .gitignore file to prevent it from being committed to version control.


There are two ways to run this app:

### Development Mode

In development mode, the client and server run separately.

1. Make sure the environment variable `NODE_ENV` is set to `development` in the `.env` file.
2. Start the backend server by opening a new terminal, navigating to the server directory, and running `npm start`.
3. Start the frontend by navigating to the frontend directory and running `npm run dev`.

In this mode, changes made to the source code will be reflected immediately, and you can use tools like hot-reloading and debugging.

### FYI. Proxy Configuration

This project uses Vite as a build tool. One of the features Vite offers is the ability to set up a proxy to avoid CORS (Cross-Origin Resource Sharing) errors during development.

In the `vite.config.js` file, the `server.proxy` option is used to set up a proxy:

1. `/api`: Any requests that start with `/api` will be proxied to `http://localhost:5050`. This is likely where the backend server is running in development.

By setting up this proxy, the frontend app can make requests to `/api` as if they're on the same domain, avoiding CORS errors.

### Production Mode

In production mode, the frontend is built and served by the backend server.

1. Build the frontend by navigating to the frontend directory and running `npm run build`. This will create a `dist` folder with the built assets.
2. Move or copy/paste the `dist` folder to the root directory of the backend server.
3. Make sure the environment variable `NODE_ENV` in the backend is not set, or is set to `null`.
4. Start the server by navigating to the server directory and running `npm start`.
5. Open your web browser and navigate to `http://localhost:[the port you specified in the .env file of your backend. I set mine to 5050 ]`.
6. You should now see the project homepage.

If you make any changes in the front-end (the one you cloned from https://github.com/josecobi/lexaviva-frontend/blob/main/README.md), follow the following steps:
     - In the backend folder: Stop the server if it is running. Remove the 'dist' folder from the root directory.
     - In the frontend folder's terminal, run `npm run build`.
     - Copy the 'dist' folder from the frontend and paste it in the root directory of the backend folder.
     - In the backend folder run `run npm start`. Now you should be able to run the app in production with the updated version of the frontend.


    ### Contact
    Jose Lopez Cobano (CobiDev) jose.lopez.cobano@gmail.com