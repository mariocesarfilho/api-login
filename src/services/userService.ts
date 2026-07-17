import { prisma } from "../../lib/prisma";
import type { CreateUserDto } from "../dtos/user/create-user.dto";
import type { UpdateUserDto } from "../dtos/user/update-user.dto";

const findById = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      cpf: true,
    },
  });

  if (!user) {
    throw new Error("Erro! Usuário não encontado.");
  }

  return user;
};

const findAllUsers = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      cpf: true,
    },
  });

  return users;
};

const createUser = async (payload: CreateUserDto) => {
  if (!payload) {
    throw new Error("Erro! Informações inválidas.");
  }

  const user = await prisma.user.create({
    data: payload,
  });

  return user;
};

const updateUser = async (id: number, payload: UpdateUserDto) => {
  if (!payload) {
    throw new Error("Erro! Informações inválidas.");
  }

  const user = await prisma.user.update({
    where: { id },
    data: payload,
  });

  return user;
};

const deleteUser = async (id: number) => {
  const user = await prisma.user.delete({
    where: { id },
  });

  return user;
};

export default { findById, findAllUsers, createUser, updateUser, deleteUser };
