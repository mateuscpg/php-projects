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
                            <input type="number" class="form-control" id="inputId" aria-describedby="idHelp" placeholder="Informe o ID">
                        </input-container-component>
                        
                    </div>

                    <div class="col mb-3">
                        <input-container-component titulo="Nome da marca" id="inputNome" id-help="nomeHelp" texto-ajuda="Opcional. Informe o nome da marca">
                            <input type="text" class="form-control" id="inputNome" aria-describedby="nomeHelp" placeholder="Informe o nome da marca">
                            </input-container-component>
                        </div>
                        
                    </div>
                </template>
                
                <template v-slot:rodape>
                    <button  type="submit" class="btn btn-primary">Buscar</button>
                </template>

            </card-component >
                <!-- Fim do card de busca -->

                <!-- Início do card de listagem -->
            <card-component titulo="Relação de marcas">
                <template v-slot:conteudo>
                    <table-component 
                    :marcas = "marcas"
                    :headers = "['id', 'nome', 'imagem', 'created_at']"
                    ></table-component>
                </template>
                
                <template v-slot:rodape>
                    <button  type="submit" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalMarca">Adicionar</button>
                </template>
            </card-component>
                <!-- Fim do card de listagem -->
        </div>

                <!-- Início do componente de modal -->
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
                <!-- Fim do componente de modal -->

      </div>
  </div>

  </template>
  
  <script>
import axios from 'axios';

  export default {
    data(){
        return{
            urlBase: 'http://localhost:8000/api/v1/marca',
            nomeMarca: '',
            arquivoImagem: [],
            transacaoStatus:'',
            mensagemAlerta:'',
            transacaoDetalhes: {},
            marcas: [], 

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
        
        carregarLista(){
            let config = {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': this.token
                }
            }   

            axios.get(this.urlBase, config)
                .then(response => {
                    this.marcas =response.data
                    console.log(this.marcas);
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
                    console.log(response);
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