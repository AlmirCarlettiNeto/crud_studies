import { Router } from "express";
import {
  createUser,
  deleteUser,
  listUsers,
  updateUser,
} from "./controller/UserController.js";

const router = Router();

// método para criar um novo usuário
router.post("/create-user", createUser);
router.put("/update-user/:id", updateUser); // route paramater passado. Assim, id será desestruturado de req.params
router.get("/list-user", listUsers);
router.delete("/delete-user/:id", deleteUser);

export default router;
