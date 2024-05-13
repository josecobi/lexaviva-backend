import User from '../models/userModel.mjs';
import generateToken from '../utilities/generateToken.mjs';


// Authorize user and get token
// The route is POST /api/users/auth
// the access is public

import asyncHandler from 'express-async-handler';

const authUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    // check if the user exists and the password is correct
    if (user && (await user.matchPassword(password))) {
      generateToken(res, user.id);
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
    });
  } else {
      res.status(401);
      throw new Error('Invalid email or password');
  }

});


//Register a new user
// The route is POST /api/users
// the access is public
const registerUser = asyncHandler(async (req, res) => {
        const { name, email, password } = req.body;
      
        const userExists = await User.findOne({ email });
      
        if (userExists) {
          res.status(400);
          throw new Error('User already exists');
        }
    
        const user = await User.create({
          name,
          email,
          password,
        });
      
        if (user) {
          generateToken(res, user._id);
          res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
          });
        } else {
          res.status(400);
          throw new Error('Invalid user data');
        }
      });


// logout user
// The route is GET /api/users/logout
// the access is public
const logoutUser = asyncHandler(async(req, res) =>{
    res.cookie('jwt', '', {
      httpOnly: true,
      expires: new Date(0),
    });
    res.status(200).json({ message: 'Logged out successfully' });
});

// Get user profile
// The route is GET /api/users/profile
// the access is private
  const getUserProfile = asyncHandler(async (req, res) => {
    if (req.user) {
      res.json({
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email,
      });
    } else {
      res.status(404);
      throw new Error('User not found');
    }
  });


// Update user profile
// The route is PUT /api/users/profile
// the access is private

  const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
  
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
  
      if (req.body.password) {
        user.password = req.body.password;
      }
  
      const updatedUser = await user.save();
  
      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
      });
    } else {
      res.status(404);
      throw new Error('User not found');
    }
  });

export {registerUser, authUser, logoutUser, getUserProfile, updateUserProfile};
