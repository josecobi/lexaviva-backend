import express from 'express';
const router = express.Router();
import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile } from '../controllers/userController.mjs';

router.post('/', registerUser);
router.post('/auth', authUser);
router.get('/logout', logoutUser);
router
    .route('/profile')
    .get(getUserProfile)
    .put(updateUserProfile);

export default router;