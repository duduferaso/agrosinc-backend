import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface Area {
    id: number;
    nome: string;
    tipoarea: boolean | null;
    idagricultor: number;
}

export const criarArea = async (data: any) => {
    return await prisma.area.create({
      data: data,
    });
  };
  
  export const atualizarArea = async (id: number, data: any) => {
    return await prisma.area.update({
      where: {
        id: id,
      },
      data: data,
    });
  };
  
  export const excluirArea = async (id: number) => {
    return await prisma.area.delete({
      where: {
        id: id,
      },
    });
  };
  
  export const buscarAreaPorId = async (id: number) => {
    return await prisma.area.findUnique({
      where: {
        id: id,
      },
    });
  };
  
  export const listarAreas = async () => {
    return await prisma.area.findMany();
  };