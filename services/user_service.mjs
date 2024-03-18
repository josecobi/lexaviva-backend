import User from '../models/user_model.mjs';

export default async function findByEmail(email){
    return await User.findOne({ email });
}