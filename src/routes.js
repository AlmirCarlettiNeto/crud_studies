import { Router } from "express";
import { createUser } from './controller/UserController.js';

const router = Router();

// método para criar um novo usuário
router.post("/create-user", createUser);

export default router;
