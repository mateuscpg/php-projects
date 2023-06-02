
@extends('app.layouts.basico')

@section('titulo', 'Produto')
    
@section('conteudo')

<div class="conteudo-pagina">
    
    <div class="titulo-pagina-2">
        <h1>Detalhes do pedido</h1>
    </div>
    <div class="menu-2">
        <ul>
            <li><a href="{{route('pedido.index')}}">Voltar</a></li>
            <li><a href="">Consulta</a></li>
        </ul>
    </div>

    <div class="informacao-pagina">

       <div style="
       background-color:aliceblue;
       padding: 25px;
       border: 1px solid rgb(4, 101, 247);
       border-radius: 20px 0px 20px 0px;
       width: 30%; 
       margin-left:auto; 
       margin-right: auto;">
       <h3>ID do pedido: {{$pedido->id}}</h3>
       <h3>ID do cliente: {{$pedido->cliente_id}}</h3>
            @component('app.pedido_produto.components.form_create', ['pedido' => $pedido, 'produtos'=>$produtos])
            @endcomponent
      
       </div>

    </div>

</div>


@endsection