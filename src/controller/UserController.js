import User from '../models/User.js';

async function createUser(req, res) {
    try {
        const { name, email } = req.body;
        const user = await User.create({ name, email });
        res.status(201).json({ user });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Failed to create user" });
    }
}

export { createUser }