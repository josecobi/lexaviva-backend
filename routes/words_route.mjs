import express from 'express';
import Word from '../models/word.mjs';
const router = express.Router();

router
    .route ("/")
    .get( async (req, res, next) => {
        try{
            const words = await Word.find({});
            res.json(words);
        }
        catch(err){
            next(err);     
        }
    })
    .post( async (req, res, next) => {
        try{
            console.log(req.body)
            const word = new Word(req.body); 
            await word.save();
            res.json(word);
    }
        catch(err){
            next(err);     
        }
    });
    router


    .route("/delete/:id")
    .delete( async (req, res, next) => {
        try{
            await Word.findByIdAndDelete(req.params.id);
            res.json("Word deleted");
        }
        catch(err){
            next(err);          
        }
    })
    
export default router;