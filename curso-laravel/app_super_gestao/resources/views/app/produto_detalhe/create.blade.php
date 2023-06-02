
@extends('app.layouts.basico')

@section('titulo', 'Detalhes do produto')
    
@section('conteudo')

<div class="conteudo-pagina">
    
    <div class="titulo-pagina-2">
        <h1>Detalhes do produto</h1>
    </div>
    <div class="menu-2">
        <ul>
            <li><a href="#">Voltar</a></li>

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
       
       @component('app.produto_detalhe.components.form_create_edit', ['unidades' => $unidades])
       @endcomponent
       </div>

    </div>

</div>


@endsection