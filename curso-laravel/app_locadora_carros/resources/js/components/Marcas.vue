<template>
    <div class="container">
      <div class="row justify-content-center">
          <div class="col-md-8">

                <!-- Início do card de busca -->
            <card-component titulo="Busca de marcas">

                <template v-slot:conteudo>
                    <div class="d-flex">
                        <div class="col mb-3">
                            <input-container-component titulo="ID" id="inputId" id-help="idHelp" texto-ajuda="Opcional. Informe o ID do registro">
                                <input type="number" v-model="busca.id" class="form-control" id="inputId" aria-describedby="idHelp" placeholder="Informe o ID">
                            </input-container-component>
                        
                        </div>

                        <div class="col mb-3">
                            <input-container-component titulo="Nome da marca" id="inputNome" id-help="nomeHelp" texto-ajuda="Opcional. Informe o nome da marca">
                                <input type="text" v-model="busca.nome" class="form-control" id="inputNome" aria-describedby="nomeHelp" placeholder="Informe o nome da marca">
                            </input-container-component>
                        </div>
                        
                    </div>
                </template>
                
                <template v-slot:rodape>
                    <button  type="submit" class="btn btn-primary" @click="pesquisar()">Pesquisar</button>
                </template>

            </card-component >
                <!-- Fim do card de busca -->

                <!-- Início do card de listagem -->
            <card-component titulo="Relação de marcas">
                <template v-slot:conteudo>
                    <table-component
                    :visualizar="{
                        visivel: true,
                        dataToggle: 'modal',
                        dataTarget: '#modalMarcaVisualizar'
                    }"
                    :atualizar="true"
                    :excluir="{
                        visivel: true,
                        dataToggle: 'modal',
                        dataTarget: '#modalMarcaExcluir'
                    }"
                    :marcas = "marcas.data"
                    :headers = "{
                        id:{titulo: 'ID', tipo: 'text'},
                        nome:{titulo: 'Nome', tipo: 'text'},
                        imagem:{titulo: 'Imagem', tipo: 'imagem'},
                        created_at:{titulo: 'Data de criação', tipo: 'data'},
                    } "
                   
                    ></table-component>
                </template>
                
                <template v-slot:rodape>
                    <div class="row">
                        <div class="col-10">
                            <paginate-component>
                                    <li 
                                    v-for="link, index in marcas.links" :key="index" 
                                    :class="link.active ? 'page-item active' : 'page-item'" 
                                    @click="paginacao(link)"

                                    >
                                        <a class="page-link" v-html="link.label "></a>
                                    </li>
                            </paginate-component>
                        </div>
                        <div class="col">
                            <button  type="submit" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalMarca">Adicionar</button>
                        </div>
                    </div>
                </template>
                
            </card-component>
                <!-- Fim do card de listagem -->
        </div>

                <!-- Início do componente de modal para adição da marca -->
            <modal-component id="modalMarca" titulo="Adicionar marca">

                <template v-slot:alertas>
                    <alert-component tipo="success" :detalhes="transacaoDetalhes" titulo="Cadastro realizado com sucesso!" v-if="transacaoStatus == 'adicionado'"></alert-component>
                    <alert-component tipo="danger" :detalhes="transacaoDetalhes" titulo="Erro ao tentar cadastrar a marca!" v-if="transacaoStatus == 'erro'"></alert-component>
                </template>

                <template v-slot:conteudo>
                    <div class="form-group">
                        <input-container-component titulo="Nome da marca" id="novoNome" id-help="novoNomeHelp" texto-ajuda="Informe o nome da marca">
                            <input type="text" v-model="nomeMarca" class="form-control" id="novoNome" aria-describedby="novoNomeHelp" placeholder="Informe o nome da marca">
                        </input-container-component>
                       
                    </div>
                    <div class="form-group">
                        <input-container-component titulo="Imagem" id="novaImagem" id-help="novaImagemHelp" texto-ajuda="Selecione uma imagem no formato PNG">
                            <input type="file" class="form-control" id="novaImagem" aria-describedby="novaImagemHelp" placeholder="Selecione uma imagem" @change="carregarImagem($event)">
                        </input-container-component>
                        
                    </div>
                </template>

                <template v-slot:rodape>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                    <button type="button" class="btn btn-primary" @click="salvar()">Salvar</button>
                </template>
            </modal-component>
                <!-- Fim do componente de modal para adição da marca -->


                <!-- Início do componente de modal para visualizar marca -->
                <modal-component id="modalMarcaVisualizar" titulo="Visualizar marca">
                    <!-- <template v-slot:alertas>

                    </template> -->

                    <template v-slot:conteudo>
                        <div class="mt-2 mb-2">
                            <input-container-component titulo="ID" >
                                <input type="text" class="form-control" :value="$store.state.item.id" disabled>
                            </input-container-component>
                        </div>
                        <div class="mt-2 mb-2">
                            <input-container-component titulo="Nome da marca" >
                                <input type="text" class="form-control" :value="$store.state.item.nome" disabled>
                            </input-container-component>
                        </div>
                        <div class="mt-2 mb-2">
                            <input-container-component titulo="Imagem da marca" >
                            <img class="d-flex m" :src="'/storage/'+ $store.state.item.imagem" v-if="$store.state.item.imagem">
                            </input-container-component>
                        </div>

                        <div class="mt-2 mb-2">
                            <input-container-component titulo="Data de criação" >
                                <input type="text" class="form-control" :value=" new Date($store.state.item.created_at).toLocaleDateString()" disabled>
                            </input-container-component>
                        </div>
                    </template>

                    <template v-slot:rodape>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                    </template>

                </modal-component>
                <!-- Fim do componente de modal para visualizar marca-->

                <!-- Início do componente de modal para excluir marca-->
                <modal-component id="modalMarcaExcluir" titulo="Excluir marca">

                    <template v-slot:alertas>
                        <alert-component v-if="$store.state.transacao.status == 'sucesso'" tipo="success" titulo="SUCESSO!" :detalhes="{mensagem: $store.state.transacao.mensagem}"></alert-component>
                        <alert-component v-if="$store.state.transacao.status == 'erro'" tipo="danger" titulo="ERRO!" :detalhes="{mensagem: $store.state.transacao.mensagem}"></alert-component>
                    </template>

                    <template v-slot:conteudo>
                        <div class="mt-2 mb-2">
                            <input-container-component titulo="ID" >
                            <input type="text" class="form-control" :value="$store.state.item.id" disabled>
                        </input-container-component>
                    </div>
                    <div class="mt-2 mb-2">
                        <input-container-component titulo="Nome da marca" >
                            <input type="text" class="form-control" :value="$store.state.item.nome" disabled>
                        </input-container-component>
                    </div>

                    <div style="display: flex; flex-direction: column; margin-top: 20px;">
                        <h5 style="text-align: center;">Você deseja de fato excluir essa marca?</h5>
                        <div class="text-center">
                            <button type="button" class="btn btn-danger"  @click="excluirMarca()">Sim</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Não</button>
                        </div>
                    </div>
                </template>
                
                    <template v-slot:rodape>
                        <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button> -->
                    </template>
                </modal-component>
                <!-- Fim do componente de modal para excluir marca-->


      </div>
  </div>

  </template>
  
  <script>
import axios from 'axios';
import InputContainer from './layouts/InputContainer.vue';

  export default {
  components: { InputContainer },
    data(){
        return{
            urlBase: 'http://localhost:8000/api/v1/marca',
            urlPaginacao: '',
            urlFiltro: '',
            nomeMarca: '',
            arquivoImagem: [],
            transacaoStatus:'',
            mensagemAlerta:'',
            transacaoDetalhes: {},
            marcas: {data: []},
            busca: {
                id: '',
                nome:'',
            },

        }
    },
    computed:{
        token(){
            let token = document.cookie.split(';').find(indice =>{ //Separa os cookies por ";" 
                return indice.includes('token=') //Retorna o cookie que tem "token="
            })
            token = token.split('=')[1] //Recupera apenas o valor do token de fato
            token = 'Bearer ' + token
            return token;
        }
    },
    methods:{
        excluirMarca(){
            let config = {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': this.token
                }
            }   
            let formData = new FormData();
            formData.append('_method', 'delete');

            let url = this.urlBase + '/' + this.$store.state.item.id
            // this.$store.state.transacao.status = 'Sucesso';
            // this.$store.state.transacao.mensagem = 'Registro removido com sucesso';

            axios.post(url, formData, config)
                .then(response =>{
                    this.$store.state.transacao.status = 'sucesso';
                    this.$store.state.transacao.mensagem = 'Registro removido com sucesso!';
                    console.log(response);
                    this.carregarLista();
                })
                .catch(errors =>{
                    this.$store.state.transacao.status = 'erro';
                    this.$store.state.transacao.mensagem = 'Erro ao remover o registro!';
                    console.log(errors);
                    this.carregarLista();
                })
        },
        pesquisar(){
            // console.log(this.busca);
            
            let filtro = ''

            for (let chave in this.busca){

                if(this.busca[chave]){
                    // console.log(chave, this.busca[chave]);
                    if (filtro != '') {
                        filtro += ';'
                    }
                    filtro += chave + ':like:' + this.busca[chave];
                }                 
                if (filtro != '') {
                    this.urlPaginacao = 'page=1'
                    this.urlFiltro = '&filtro=' + filtro;
                } else{
                    this.urlFiltro = ''
                }
                this.carregarLista();    
                
            }
        },

        paginacao(link){
            if(link.url){
                 this.urlPaginacao = link.url.split('?')[1]
                // this.urlBase = link.url; //Ajustando a url de consulta com o parâmetro de página
                this.carregarLista();    //Requisitando novamente os dados para a nossa API
            }
        },
        
        carregarLista(){
            let config = {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': this.token
                }
            }   
            let url = this.urlBase + '?' + this.urlPaginacao + this.urlFiltro
            // console.log(url);
            axios.get(url, config)
                .then(response => {
                    this.marcas = response.data
                })
                .catch(errors => {
                    console.log(errors);
                })
        },
        
        carregarImagem(e){
            this.arquivoImagem = e.target.files
        },
        salvar(){

            let formData = new FormData();
            formData.append('nome', this.nomeMarca)
            formData.append('imagem', this.arquivoImagem[0])
            
            let config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json',
                    'Authorization': this.token
                }
            }           
                          //url      conteúdo    configuração
            axios.post(this.urlBase, formData, config)
                .then(response => {
                    this.transacaoStatus = 'adicionado';
                    this.transacaoDetalhes = {
                        mensagem: "Carro com ID: "+ response.data.id +" e nome: " + response.data.nome + " cadastrado"
                    }
                    this.carregarLista();
                })
                .catch(errors => {
                    this.transacaoStatus = 'erro';
                    this.transacaoDetalhes = {
                        mensagem: errors.response.data.message,
                        dados: errors.response.data.errors
                    }
                })
        }
    },
    mounted() {
        this.carregarLista();
    }
  
  }
  </script>
  
  <style>
  
  </style>