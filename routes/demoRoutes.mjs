import express from 'express';
import Word from '../models/wordModel.mjs';
import wordsData from '../data/sample_data.mjs';
const router = express.Router();
router.use(express.json());


router
    .route ("/study")
    // Get all words
    .get( async (req, res, next) => {
        try{
            res.json(wordsData);
        }
        catch(err){
            next(err);     
        }
    });

    export default router;