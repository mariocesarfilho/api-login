import type { Request, Response } from "express";
import userService from "../services/userService";

export const createUser = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const user = await userService.createUser(payload);

    return res.status(201).json({ user });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
    return res.status(400).json({ message: "Erro desconhecido!" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const payload = req.body;

    const user = await userService.updateUser(id, payload);

    return res.status(200).json({ user });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
    return res.status(400).json({ error: "Erro desconhecido!" });
  }
};

export const findUser = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const user = await userService.findById(id);

    return res.status(200).json({ user });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(200).json({ message: error.message });
    }
    return res.status(400).json({ message: "Erro desconhecido!" });
  }
};

export const allUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.findAllUsers();

    return res.status(200).json({ users });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(200).json({
        message: error.message,
      });
    }

    return res.status(500).json({
      message: "Erro desconhecido!",
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    await userService.deleteUser(id);

    return res.status(200).json({ message: "Usuário Deletado com sucesso!" });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(200).json({ message: error.message });
    }

    return res.status(500).json({
      message: "Erro desconhecido!",
    });
  }
};
