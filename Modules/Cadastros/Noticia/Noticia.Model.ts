import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface NoticiaSemana {
    id: number;
    titulo: string;
    conteudo: string;
    data_publicacao: Date;
}

export default NoticiaSemana;
