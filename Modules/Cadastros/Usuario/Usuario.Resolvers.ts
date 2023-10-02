import {usuarios, criarUsuario, excluirUsuario, buscarUsuarioPorNome} from './Usuario.Model';

export default {
  Query: {
    usuarios: async () => {
      return await usuarios();
    },
  },
  Mutation: {
    criarUsuario: async (_:any, { input }:any) => {
      const usuario = await criarUsuario(input);
      return usuario;
    },
    excluirUsuario: async (_:any, { id }:any) => {
      const usuario = await excluirUsuario(id);
      return usuario;
    },
    login: async (_:any, { nome, senha }:any) => {
        const usuario = await buscarUsuarioPorNome(nome);
  
        if (!usuario) {
          throw new Error('Usuário não encontrado');
        }
  
        if (usuario.senha !== senha) {
          throw new Error('Credenciais inválidas');
        }
        const token = 'seu_token_de_autenticacao';
  
        return token;
      },
  },
};
