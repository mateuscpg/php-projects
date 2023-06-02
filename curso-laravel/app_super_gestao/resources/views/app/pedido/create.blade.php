
@extends('app.layouts.basico')

@section('titulo', 'Pedidos')
    
@section('conteudo')

<div class="conteudo-pagina">
    
    <div class="titulo-pagina-2">
        <h1>Pedidos</h1>
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
       border-radius: 20px 0px 20px 0px;
       width: 30%; 
       margin-left:auto; 
       margin-right: auto;">
       
       @component('app.pedido.components.form_create_edit', ['clientes'=> $clientes])
       @endcomponent
       </div>

    </div>

</div>


@endsection