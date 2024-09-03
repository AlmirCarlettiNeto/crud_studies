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

/*
Você sabe a diferença entre rota e endpoint?

Rota é um caminho ou um padrão de URL que o servidor reconhece e ao qual responde.
Já um Endpoint é um recurso específico ou uma URL que representa uma interação com a API. Ele é a combinação da rota e do método HTTP (GET, POST, PUT, DELETE, etc.). Em outras palavras, um endpoint é a URL completa e o método HTTP que permite acessar um recurso específico
*/
