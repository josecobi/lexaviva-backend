import mongoose from 'mongoose';
const model = mongoose.model;
const Schema = mongoose.Schema;

// Define the schema
const wordSchema = new Schema({
    word: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
    },
    attribution: {
      type: String,
    },
    topic: {
        type: String,
        required: true,
    },
    english_word: {
        type: String,
        required: true,
    },
  });

  
  const Word = model('Word', wordSchema);

  Word.schema.index({ topic: 1 });

  export default Word