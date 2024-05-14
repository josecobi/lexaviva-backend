import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.mjs';

const protect = asyncHandler(async (req, res, next) => {
  let token;
  //get the token from the request header
  token = req.cookies.jwt;
// if the token exists, verify it and get the user data
  if (token) {
    try {
      //decode the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //get the user data from the database
      req.user = await User.findById(decoded.userId).select('-password');
      
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  } else {
    res.status(400);
    throw new Error('Not authorized, no token');
  }
});

export { protect };