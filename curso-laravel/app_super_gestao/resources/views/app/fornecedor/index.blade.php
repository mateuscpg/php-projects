@extends('app.layouts.basico')

@section('titulo', 'Fornecedores')
    
@section('conteudo')

<div class="conteudo-pagina">
    
    <div class="titulo-pagina-2">
        <h1>Fornecedores</h1>
    </div>
    <div class="menu-2">
        <ul>
            <li><a href="{{route('app.fornecedor.adicionar')}}">Novo</a></li>
            <li><a href="{{route('app.fornecedor')}}">Consulta</a></li>
        </ul>
    </div>

    <div class="informacao-pagina">

       <div style="
       background-color:aliceblue;
       padding: 25px;
       border-radius: 20px 0px 20px 0px;
       width: 30%; 
       margin-left:auto; 
       margin-right: auto;">
         <form method="POST" action="{{route('app.fornecedor.listar')}}">
            @csrf
            <h2>CONSULTAR</h2>
            <input type="text" name="nome" placeholder="Digite um nome" class="borda-preta">
            <input type="text" name="site" placeholder="Digite um site" class="borda-preta">
            <input type="text" name="uf" placeholder="Digite uma uf" class="borda-preta">
            <input type="text" name="email" placeholder="Digite um email" class="borda-preta">
            <button type="submit" class="bordar-preta">Pesquisar</button>

         </form>

       </div>

    </div>

</div>


@endsection