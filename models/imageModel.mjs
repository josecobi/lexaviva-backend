import mongoose from "mongoose";
const model = mongoose.model;

const imageSchema = mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    attribution:{
        type: String,
        required: false
    },
    keywords: {
        type:Array,
        required: true
    }
    
})


const Image = model('image', imageSchema);

export default Image;