import express from 'express';
const router = express.Router();



router.get("/resources", async (req, res, next) => {
    try{
        const apiKey = process.env.FREEPIK_API_KEY;
        const searchTerm = req.query.searchTerm;
        const url = `https://api.freepik.com/v1/resources?term=${searchTerm}&filters%5Bcontent_type%5D%5Bvector%5D=1&filters%5Blicense%5D%5Bfreemium%5D=1`;
        const options = {
            method: 'GET',
            headers: {
              'x-freepik-api-key': apiKey,
              'Accept-Language': 'en-US'
            }
          };
          
           const response = await fetch(url, options)
           .then(res => res.json())
           res.json(response.data);
    } 
    catch(err){
        console.log(err)
        next(err);
    };
});

export default router;