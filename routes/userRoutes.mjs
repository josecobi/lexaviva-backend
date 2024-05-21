import express from 'express';
import { protect } from '../middleware/authMiddleware.mjs';

const router = express.Router();
import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile } from '../controllers/userController.mjs';

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router
    .route('/profile')
    .get(protect, getUserProfile) // added protect middleware so it throws and error if we try and access these routes without a token.
    .put(protect, updateUserProfile);

export default router;