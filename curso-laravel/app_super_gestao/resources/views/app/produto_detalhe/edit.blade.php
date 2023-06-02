
@extends('app.layouts.basico')

@section('titulo', 'Detalhes do produto')
    
@section('conteudo')

<div class="conteudo-pagina">
    
    <div class="titulo-pagina-2">
        <h1>Produtos</h1>
    </div>
    <div class="menu-2">
        <ul>
            <li><a href="#">Voltar</a></li>
        </ul>
    </div>

    <div class="informacao-pagina">
        <div class="product" style="
            background-color: #096da7;
            border-radius:5px;
            padding: 5px;
            border-radius: 20px 20px 0px 0px;
            width: 34%; 
            margin-left:auto; 
            margin-right: auto;
            ">
            <h3>Produto</h3>
            <div>Nome: {{$produto_detalhe->produto->nome}}</div>
            <br>
            <div>Descrição: {{$produto_detalhe->produto->descricao}}</div>
            <br>
        </div>

       <div style="
       background-color:aliceblue;
       padding: 25px;
       border-radius: 0px 0px 20px 20px;
       width: 30%; 
       margin-left:auto; 
       margin-right: auto;">
        @component('app.produto_detalhe.components.form_create_edit', ['produto_detalhe' => $produto_detalhe, 'unidades' => $unidades])
        @endcomponent
       </div>

    </div>

</div>


@endsection