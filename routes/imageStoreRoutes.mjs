// import express from 'express';
// import Image from '../models/imageModel.mjs';
// import multer from 'multer';
// import uploadImageToBucket from './utilities/uploadImageToBucket.mjs';
// import sharp from 'sharp';


// const storage = multer.memoryStorage();
// const upload = multer({storage: storage});

// const router = express.Router();



// router
// // //get all images
// // .get("/", async (req, res, next) => {
// //     try{
// //         const images = await Image.findMany();
// //         console.table(images);
// //     } 
// //     catch(err){
// //         next(err);
// //     }
    
// // })
// // // get image by Id
// // .get('/image', async (req, res, next) => {
// //     try{
// //         const id = req.body.id;
// //         const image = await Image.findOneById({'_id': id});
// //         res.send(image);
// //     }
// //     catch(err){
// //         next(err);
// //     }
// // })
// // save image data to the database and file to Backblaze
// .post('/uploadImage', upload.single('image'), async (req, res, next) => {
//     try{
//         console.log("Request body: ", req.body);
//         console.log("Request file: ", req.file);

//         const bucketName = process.env.BUCKET_NAME;
//         const keyName = req.file.filename;
//         const buffer = req.file.buffer;
//         const contentType = req.file.mimetype;

//         uploadImageToBucket(bucketName, keyName, buffer, contentType);
       

//         res.send({}); 

//     }catch(err){
//         next(err);
//     }
       
// });

// export default router;