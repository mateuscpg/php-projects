import api from '../api'

export default {

    getPerfil: async () => {
        let dados = await api.get('/get-user');
        return dados.data;
    },

    listPrincipalMovies: async () => {
        let dados = await api.get('/movies/get-principal-movie');
        return dados.data;
    },
    
    listRecommendedMovies: async () => {
        let dados = await api.get('/movies/get-recommended-movie');
        return dados.data;
    },
    searchMovies: async (moviesCategory, searchQuery) => {
        let dados = await api.get('/movies/search-movie', {
          params: {
            category: moviesCategory,
            movie: searchQuery
          }
        });
        return dados.data;
      },
      
    
    listAcctionMovies: async () => {
        let dados = await api.get('/movies/get-acction-movie');
        return dados.data;
    },
    
    listAdventureMovies: async () => {
        let dados = await api.get('/movies/get-adventure-movie');
        return dados.data;
    },
    
    listTerrorMovies: async () => {
        let dados = await api.get('/movies/get-terror-movie');
        return dados.data;
    },
    
    listRomanceMovies: async () => {
        let dados = await api.get('/movies/get-romance-movie');
        return dados.data;
    },
    
    listDramaMovies: async () => {
        let dados = await api.get('/movies/get-drama-movie');
        return dados.data;
    },
    
    listComedyMovies: async () => {
        let dados = await api.get('/movies/get-comedy-movie');
        return dados.data;
    },
    
    listDocumentaryMovies: async () => {
        let dados = await api.get('/movies/get-documentary-movie');
        return dados.data;
    },
    
    listSuspenseMovies: async () => {
        let dados = await api.get('/movies/get-suspense-movie');
        return dados.data;
    },
    
    listScienceFictionMovies: async () => {
        let dados = await api.get('/movies/get-science-fiction-movie');
        return dados.data;
    },
    
    listMusicalMovies: async () => {
        let dados = await api.get('/movies/get-musical-movie');
        return dados.data;
    },
    
}