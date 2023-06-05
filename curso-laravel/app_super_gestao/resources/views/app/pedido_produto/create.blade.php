
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
       <h3>ID do cliente: {{$pedido->id}}</h3>

       <h4>Itens do Pedido</h4>
       <table border="1" width=100%>
            <thead>
                <tr>
                    <th>ID do produto</th>
                    <th>Nome do produto</th>
                    <th>Data do pedido</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                @foreach ($pedido->produtos as $produto )
                <tr>
                    <td>{{ $produto->id }}</td>
                    <td>{{ $produto->nome }}</td>
                    <td>{{ $produto->pivot->created_at->format('d/m/Y') }}</td>
                    <td>
                        <form 
                            id="form_{{$produto->pivot->id}}"
                            method="post"
                            action="{{route('pedido-produto.destroy', ['pedidoProduto'=> $produto->pivot->id, 'pedido_id'=> $pedido->id])}}">
                            @method('DELETE')
                            @csrf
                                <a 
                                    href="#" 
                                    onclick="document.getElementById('form_{{$produto->pivot->id}}').submit()" 
                                    class="a-excluir-dark"
                                    >
                                    Excluir
                                </a>

                        </form>
                    </td>
                </tr>
                @endforeach
            </tbody>
       </table>

            @component('app.pedido_produto.components.form_create', ['pedido' => $pedido, 'produtos'=>$produtos])
            @endcomponent
      
       </div>

    </div>

</div>


@endsection