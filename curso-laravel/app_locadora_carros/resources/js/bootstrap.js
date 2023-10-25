const { default: axios } = require('axios');
const { error } = require('laravel-mix/src/Log');

window._ = require('lodash');

try {
    require('bootstrap');
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

// Interceptar os requests da aplicação
axios.interceptors.request.use(
    config => {

        // Definir para todas as requisições os parâmetros
        // de Accept e Authorization
        config.headers['Accept'] = 'application/json'               //Primeira forma de acesso à parâmetros do headers
        
        // Recuperando o token de autorização dos cookies
        let token = document.cookie.split(';').find(indice =>{      //Separa os cookies por ";" 
            return indice.includes('token=')                        //Retorna o cookie que tem "token="
        })
        
        token = token.split('=')[1]                                 //Recupera apenas o valor do token de fato
        token = 'Bearer ' + token
                
        config.headers.Authorization = token;                       //Segunda forma de acesso à parâmetros do headers

        return config
    },
    error => {
        return Promise.reject(error);
    }
    )


// Interceptar os responses da aplicação
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if(error.response.status == 401 && error.response.data.message == 'Token has expired') {  //Caso o token do JWT tenha expirado e dado o erro 401 
            axios.post('http://localhost:8000/api/refresh')                                       //no response, chame essa rota para fazer um refresh desse 
                .then(response => {                                                               //token, adicione esse token no cookie e atualize a página
                    document.cookie = 'token='+response.data.token+';SameSite=Lax'
                    window.location.reload();
                })
        }
        return Promise.reject(error);
    },
)

