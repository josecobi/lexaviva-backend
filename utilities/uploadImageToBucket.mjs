// import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
// import asyncHandler from 'express-async-handler';



// // Create an S3 client
// const s3 = new S3Client({
//     endpoint: 's3.us-west-002.backblazeb2.com',
//     region: 'us-west-002'
//   });


// const uploadImageToBucket = asyncHandler(async (bucketName, keyName, buffer, contentType) => {

//     await s3.send(new PutObjectCommand ({
//         Bucket: bucketName,
//         Key: keyName,
//         Body: buffer,
//         ContentType: contentType,      
//     }))


// })

// export default uploadImageToBucket;