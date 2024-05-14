// Create example data to be inserted in the database
import wordsData from '../data/example_data.mjs';
import Word from '../models/wordModel.mjs';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.mjs';


// Insert data into the collection for 'example@example' user
const insertSampleData = asyncHandler( async () => {
  const userExample = await User.findOne({email: "example@example.com"});
  console.log(userExample._id);

  if (!userExample) {
    console.log("User not found");
    return;
  }
  wordsData.forEach(async (word) => {
    word.user_id = userExample._id;
  });

  await Word.insertMany(wordsData)
    console.log('Data inserted successfully');
});


// Copy sample data to the new user's collection and update the user_id
const copySampleData = asyncHandler(async (user_id) => {
  const userExample = await User.findOne({email: "example@example.com"});
  console.log(userExample);
  const exampleWords = await Word.find({user_id: userExample._id});
  const newUserSampleWords = exampleWords.map(word => {
    let wordObj = word.toObject();
    delete wordObj._id;
    wordObj.user_id = user_id;
    return wordObj;
  });
  console.log("new user words<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<", newUserSampleWords);
  await Word.insertMany(newUserSampleWords);
} )



export { insertSampleData, copySampleData };