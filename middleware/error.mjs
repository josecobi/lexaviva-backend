// export default function error(status, msg) {
//     var err = new Error(msg);
//     err.status = status;
//     return err;
//   }

const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;


  // If the id of the resource is not found in the database, set the status code to 404 and change the message to "Resource not found" 
  if (err.name === 'CastError' && err.kind ==="ObjectId") {
    statusCode = 404;
    message = "Resource not found";
  };

 res.status(statusCode).json({
    message: message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export {notFound, errorHandler};