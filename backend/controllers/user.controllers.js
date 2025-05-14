import User from '../models/users.models.js';

const createUsers = async (req, res) => {
    try {
    
        const { username, email, password } = req.body;

    

        if (!username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required',
            });
        }

        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: 'Email already exists',
            });
        }
          const newUser = new User({
            username,
            email,
            password, // Storing plain text password (not recommended)
          });
        await newUser.save();

        res.status(201).json({
            success: true,      
            message: 'User created successfully',
            user: {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email
            },
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            error: error.message  // Helps you see what's wrong in Postman or frontend
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please provide email and password',
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found',
            });
        }

        // Compare plain text passwords
        if (user.password !== password) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials',
            });
        }

        res.json({
            success: true,
            message: 'User logged in successfully',
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
            },
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
        });
    }
};

const getAllUsers = async (req, res) => { 
    try {
        const users = await User.find();
        res.json({
            success: true,
            data: users,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
        });
    }
}

export { createUsers, loginUser,getAllUsers };