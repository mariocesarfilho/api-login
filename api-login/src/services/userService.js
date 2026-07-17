import { prisma } from "../../lib/prisma";

const findById = async (id) => {
  if (!Number.isInteger(id)) {
    throw new Error("ID Inválido!");
  }

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

  if (!user) {
    throw new Error("Erro! Nenhum usuário encontrado.");
  }

  return users;
};

const createUser = async (payload) => {
  if (!payload) {
    throw new Error("Erro! Informações inválidas.");
  }

  const user = await prisma.user.create({
    data: {
      name: payload.name,
      email: payload.email,
      cpf: payload.cpf,
      password: payload.password,
    },
  });

  return user;
};

const updateUser = async (id, payload) => {
  if (!payload) {
    throw new Error("Erro! Informações inválidas.");
  }

  if (!Number.isInteger(id)) {
    throw new Error("ID Inválido. ");
  }

  const user = await prisma.user.update({
    where: { id },
    data: {
      name: payload.name,
      email: payload.email,
      cpf: payload.cpf,
    },
  });

  if (!user) {
    throw new Error("Erro! Usuário não encontrado.");
  }

  return user;
};

const deleteUser = async (id) => {
  if (!Number.isInteger(id)) {
    throw new Error("ID Inválido.");
  }

  const user = await prisma.user.delete({
    where: { id },
  });

  if (!user) {
    throw new Error("Error! Usuário não encontrado.");
  }

  return user;
};
