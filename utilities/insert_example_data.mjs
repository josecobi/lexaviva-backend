// Create example data to be inserted in the database
import wordsData from '../data/example_data.mjs';
import Word from '../models/word.mjs';


// Insert data into the collection
export default function insertExampleData(){
  Word.insertMany(wordsData)
  .then(() => {
    console.log('Data inserted successfully');
  })
  .catch((error) => {
    console.error('Error inserting data:', error);
  })
}