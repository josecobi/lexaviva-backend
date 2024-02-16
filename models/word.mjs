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
      required: true,
    },
    topic: {
      topicName: {
        type: String,
        required: true,
      },
    },
  });

  const Word = model('Word', wordSchema);
  export default Word