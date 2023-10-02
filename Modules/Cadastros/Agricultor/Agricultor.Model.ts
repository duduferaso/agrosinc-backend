import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface Agricultor {
    id: number;
    nome: string;
    sobrenome: string;
    datanascimento: string | null;
    sexo: string | null;
    endereco: string | null;
    cidade: string | null;
    estado: string | null;
    cep: string | null;
    cpf: string | null;
    telefone: string | null;
    email: string | null;
  }
  
  export const agricultores = async () => {
    return await prisma.agricultor.findMany();
  };

  export const criarAgricultor = async (data:any) => {
    return await prisma.agricultor.create({
      data: data,
    });
  };
  
  export const excluirAgricultor = async (id: string) => {
    const agricultorId = parseInt(id, 10);
    if (isNaN(agricultorId)) {
      throw new Error('ID inválido');
    }
  
    return await prisma.agricultor.delete({
      where: {
        id: agricultorId,
      },
    });
  };

  
  export default Agricultor;
  