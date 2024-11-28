import User from "../models/userModel.js"

export const checkExistingUser = async (req, res, next) => {
    const { email } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: 'Email already exists'
            })
        }
        next();
    }
    catch (error) {
        console.error('Error checking existing user:', error);
        res.status(500).json({ message: 'Server error while checking user' });
    }
}