
@extends('app.layouts.basico')

@section('titulo', 'Pedidos')
    
@section('conteudo')

<div class="conteudo-pagina">
    
    <div class="titulo-pagina-2">
        <h1>Listagem de Pedidoss</h1>
    </div>
    <div class="menu-2">
        <ul>
            <li><a href="{{route('pedido.create')}}">Novo</a></li>
            <li><a href="">Consulta</a></li>
        </ul>
    </div>

    <div class="informacao-pagina">

       <div class="tabela">

        <table width='100%'>
            <thead>
                <tr>
                    <th>ID pedido</th>
                    <th>Cliente</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>

            </thead>
            <tbody>
                @foreach ($pedidos  as $pedido)
                <tr>
                    <td>{{$pedido->id}}</td>
                    <td>{{$pedido->cliente_id}}</td>
                    <td><a href="{{route('pedido-produto.create', ['pedido' => $pedido->id])}}" class="a-add">Adicionar Produtos</a></td>
                    <td>
                        <a class="a-visualizar" href="{{ route('pedido.show', ['pedido' => $pedido->id])}}">Visualizar</a>
                    </td>
                    <td>
                        <form id="form_{{$pedido->id}}" method="post" action="{{route('pedido.destroy', ['pedido' => $pedido->id])}}">
                            @method('DELETE')
                            @csrf
                            <a class="a-excluir" href="#" onclick="document.getElementById('form_{{$pedido->id}}').submit()">Excluir</a>
                        </form>
                    </td>
                    <td>
                        <a class="a-editar" href="{{route('pedido.edit', ['pedido' => $pedido->id])}}">Editar</a>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>

        {{ $pedidos->appends($request)->links() }}

        <br>
        Exibindo  {{ $pedidos->count() }} pedidos de {{ $pedidos->total() }} (de {{ $pedidos->firstItem() }} a {{$pedidos->lastItem()}})
       </div>

    </div>

</div>


@endsection