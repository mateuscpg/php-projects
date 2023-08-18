import api from '../api'

export default {

    getPerfil: async () => {
        let dados = await api.get('/get-user');
        return dados.data;
    },

    listarFilmes: async () => {
        let dados = await api.get('https://api.chucknorris.io/jokes/random');
        return dados.data;
    },
}