import User from '../models/userModel.js'
import bcrypt from 'bcrypt';

export const createUser = async (name, email, password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        
        return newUser;
    } catch (error) {
        throw new Error('Error creating user');
    }
};