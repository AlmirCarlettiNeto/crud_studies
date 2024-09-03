import { User } from "../models/User.js";

export async function createUser(req, res) {
  try {
    const { name, email } = req.body;
    const user = await User.create({ name, email });
    res.status(200).json({ user });
  } catch (error) {
    console.error("Error creating user:", error);
    console.log(error);
    res.status(500).json({ error: "Failed to create user" });
  }
}
