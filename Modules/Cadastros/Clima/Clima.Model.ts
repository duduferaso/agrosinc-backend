import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface DadosClimaticos {
    id: number;
    titulo: string;
    tipodado: string;
    data: Date;
}

export const criarDadosClimaticos = async (data: any) => {
    return await prisma.dadosclimaticos.create({
      data: data,
    });
  };
  
  export const atualizarDadosClimaticos = async (id: number, data: any) => {
    return await prisma.dadosclimaticos.update({
      where: {
        id: id,
      },
      data: data,
    });
  };
  
  export const excluirDadosClimaticos = async (id: number) => {
    return await prisma.dadosclimaticos.delete({
      where: {
        id: id,
      },
    });
  };
  
  export const buscarDadosClimaticosPorId = async (id: number) => {
    return await prisma.dadosclimaticos.findUnique({
      where: {
        id: id,
      },
    });
  };
  
  export const listarDadosClimaticos = async () => {
    return await prisma.dadosclimaticos.findMany();
  };