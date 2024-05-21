// Create example data to be inserted in the database
import wordsData from '../data/sample_data.mjs';
import Word from '../models/wordModel.mjs';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.mjs';


// Insert data into the collection for 'example@example' user
const insertSampleData = asyncHandler( async (user_id) => {
 
  const copyOfWordData = wordsData.reduce((acc, word) => {
    word.user_id = user_id;
    acc.push(word)
    return acc;
  },[]);


  await Word.insertMany(copyOfWordData)
    console.log('Data inserted successfully');
});



export { insertSampleData };