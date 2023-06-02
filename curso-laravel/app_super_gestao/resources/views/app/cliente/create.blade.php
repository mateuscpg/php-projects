
@extends('app.layouts.basico')

@section('titulo', 'Cliente')
    
@section('conteudo')

<div class="conteudo-pagina">
    
    <div class="titulo-pagina-2">
        <h1>Clientes</h1>
    </div>
    <div class="menu-2">
        <ul>
            <li><a href="{{route('cliente.index')}}">Voltar</a></li>
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
       
       @component('app.cliente.components.form_create_edit')
       @endcomponent
       </div>

    </div>

</div>


@endsection