import express from 'express';
import Word from '../models/wordModel.mjs';
const router = express.Router();
router.use(express.json());


router
    .route ("/")
    // Get all words
    .get( async (req, res, next) => {
        try{
            const words = await Word.find({});
            res.json(words);
        }
        catch(err){
            next(err);     
        }
    })
    // Add word to the database
    .post( async (req, res, next) => {
        try{
            console.log(req.body)
            const word = new Word(req.body);
            await word.save();
            console.log("This is the new created word: ", word)
            res.json(word);
        }
        catch(err){
            next(err);     
        }
    });

    router
    //Delete word by Id
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

    // Update term by ID
    router 
    .route("/update/:id")
    .put(async (req, res, next) => {
      try {
        const updatedWord = await Word.findByIdAndUpdate(req.params.id, req.body, {new: true} );
        
        console.log({updatedWord})
        res.status(200).send(`Words "${updatedWord}" updated successfully.`);
      } catch (err) {
        next(err);
      }
    });

    router
    // Delete all words based on their topic
    .route("/deleteAllByTopic/:topic")
    .delete( async (req, res, next) => {
        try{
            let wordsToDelete = await Word.deleteMany({topic: req.params.topic});
            // If no words are deleted, send a 404 status code and a message
            (wordsToDelete.deletedCount === 0) ? res.status(404).send(`Words with topic "${req.params.topic}" not found.`) :
            res.status(200).send(`Words with topic "${req.params.topic}" deleted successfully.`);
        }
        catch(err){
            next(err);
        }
    })

    router
    // Insert multiple words
    .route("/insertMany")
    .post( async (req, res, next) => {
        try{
            const data = req.body;
            await Word.insertMany(data);
            res.json("Words inserted");
        }
        catch(err){
            next(err);
        }
    })

    router
    // Get list of topics with no duplicates. Topic being case insensitive
    
    .route("/topics")
    .get( async (req, res, next) => {
        try{
            const topics = await Word.distinct("topic", {user_id: req.query.user_id});
            res.json(topics);
        }
        catch(err){
            next(err);
        }
    })

    router
    // Get words by topic. Topic being case insensitive to avoid duplicate
    .route("/topicsByUser")
    .get( async (req, res, next) => {
        try{
            const topic = req.query.selectedTopic;
            const user_id = req.query.user_id;
            // const words = await Word.find({topic: { $regex: new RegExp(topic, "i") }, user_id: user_id });
            const topics = await Word.distinct("topic", {user_id: user_id});
            // Check if topic is in the list of topics
            if(topics.some(t => new RegExp(`^${topic}$`, 'i').test(t))){
                res.json(topic);
            }
            else{
                res.json({ message: `Topic "${topic}" not found`, data: [] });
            }
        }
        catch(err){
            next(err);
        }
    })
    
    router
    .route("/byTopic")
    .get( async (req, res, next) => {
        try{
            const topic = req.query.selectedTopic;
            const user_id = req.query.user_id;
            const words = await Word.find({topic:  { $regex: new RegExp(`^${topic}$`, "i") } , user_id: user_id });
            res.json(words);
        } 
        catch(err){
            next(err);
        }
    })

    


export default router;