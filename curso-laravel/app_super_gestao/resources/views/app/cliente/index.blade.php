
@extends('app.layouts.basico')

@section('titulo', 'Cliente')
    
@section('conteudo')

<div class="conteudo-pagina">
    
    <div class="titulo-pagina-2">
        <h1>Listagem de clientes</h1>
    </div>
    <div class="menu-2">
        <ul>
            <li><a href="{{route('cliente.create')}}">Novo</a></li>
            <li><a href="">Consulta</a></li>
        </ul>
    </div>

    <div class="informacao-pagina">

       <div class="tabela">

        <table width='100%'>
            <thead>
                <tr>
                    <th>Nome</th>
                 
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>

            </thead>
            <tbody>
                @foreach ($clientes as $cliente)
                <tr>
                    <td>{{$cliente->nome}}</td>
                    <td>
                        <a class="a-visualizar" href="{{ route('cliente.show', ['cliente' => $cliente->id])}}">Visualizar</a>
                    </td>
                    <td>
                        <form id="form_{{$cliente->id}}" method="post" action="{{route('cliente.destroy', ['cliente' => $cliente->id])}}">
                            @method('DELETE')
                            @csrf
                        <a class="a-excluir" href="#" onclick="document.getElementById('form_{{$cliente->id}}').submit()">Excluir</a>
                        </form>
                    </td>
                    <td>
                        <a class="a-editar" href="{{route('cliente.edit', ['cliente' => $cliente->id])}}">Editar</a>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>

        {{ $clientes->appends($request)->links() }}

        <br>
        Exibindo  {{ $clientes->count() }} clientes de {{ $clientes->total() }} (de {{ $clientes->firstItem() }} a {{$clientes->lastItem()}})
       </div>

    </div>

</div>


@endsection