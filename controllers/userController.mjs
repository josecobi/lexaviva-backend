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
    res.send('logout user');
});

// Get user profile
// The route is GET /api/users/profile
// the access is private
const getUserProfile = asyncHandler(async (req, res) => {
    res.send('get user profile');
});

// Update user profile
// The route is PUT /api/users/profile
// the access is private
const updateUserProfile = asyncHandler(async(req, res) => {
    res.send('update user profile');
});

export {registerUser, authUser, logoutUser, getUserProfile, updateUserProfile};
