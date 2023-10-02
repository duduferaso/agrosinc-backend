import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface Usuario {
    id: number;
    nome: string;
    senha: string;
}

export const usuarios = async () => {
    return await prisma.usuario.findMany();
  };

export const criarUsuario = async (data:any) => {
return await prisma.usuario.create({
    data: data,
});
};

export const buscarUsuarioPorNome = async (nome: string) => {
    return await prisma.usuario.findFirst({
      where: {
        nome: nome,
      },
    });
  };
  
export const excluirUsuario = async (id: string) => {
const usuarioId = parseInt(id, 10);
if (isNaN(usuarioId)) {
    throw new Error('ID inválido');
}

return await prisma.usuario.delete({
    where: {
    id: usuarioId,
    },
});
};