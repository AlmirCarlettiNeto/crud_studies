import { User } from "../models/User.js";

export async function createUser(req, res) {
  try {
    const { name, email } = req.body;

    let user = await User.findOne({ where: { email } }); // para não permitir que dois usuários sejam cadastrados com o mesmo e-mail
    if (user) {
      res.status(200).json({ message: "Já existe um usuário com este e-mail" });
    } else {
      user = await User.create({ name, email });
      res.status(200).json({ user });
    }
  } catch (error) {
    console.error("Error creating user:", error);
    console.log(error);
    res.status(500).json({ error: "Failed to create user" });
  }
}

export async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    let user = await User.findOne({ where: { id } });

    if (!user) {
      res.status(401).json({ message: "Nenhum usuário encontrado" });
    } else {
      user = await User.update({ name, email }, { where: { id } });
      res.status(200).json({ user });
    }
  } catch (error) {
    console.error("Error updating user:", error);
    console.log(error);
    res.status(400).json({ error: "Failed to update user" });
  }
}

export async function listUsers(req, res) {
  try {
    const users = await User.findAll();

    if (!users) {
      res.status(200).json({ message: "Não há usuários cadastrados" });
    } else {
      res.status(200).json({ users });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
}

export async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    let user = await User.findOne({ where: { id } });

    if (!user) {
      res.status(401).json({ message: "Usuário não encontrado" });
    } else {
      await User.destroy({ where: { id } });
      res.status(200).json({ message: `Usuário com o id ${id} apagado` });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao apagar o usuário" });
  }
}
