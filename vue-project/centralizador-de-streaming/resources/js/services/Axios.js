import api from '../api'

export default {

    getUser: async () => {
        let dados = await api.get('/getuser');
        return dados.data
    },

    listarFilmes: async () => {
        let dados = await api.get('https://api.chucknorris.io/jokes/random');
        return dados.data;
    },
}