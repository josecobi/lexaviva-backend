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

export default router;