
@extends('app.layouts.basico')

@section('titulo', 'Produto')
    
@section('conteudo')

<div class="conteudo-pagina">
    
    <div class="titulo-pagina-2">
        <h1>Listagem de Produtos</h1>
    </div>
    <div class="menu-2">
        <ul>
            <li><a href="{{route('produto.create')}}">Novo</a></li>
            <li><a href="">Consulta</a></li>
            <li><a href="{{route('produto-detalhe.create')}}">Adicionar Detalhes</a></li>
        </ul>
    </div>

    <div class="informacao-pagina">

       <div class="tabela">

        <table width='100%'>
            <thead>
                <tr>
                    <th>ID do produto</th>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Fornecedor</th>
                    <th>Site Fornecedor</th>
                    <th>Peso</th>
                    <th>Comprimento</th>
                    <th>Altura</th>
                    <th>Largura</th>
                    
                </tr>

            </thead>
            <tbody>
                @foreach ($produtos as $produto)
                <tr>
                    <td>{{$produto->id}}</td>
                    <td>{{$produto->nome}}</td>
                    <td>{{$produto->descricao}}</td>
                    <td>{{$produto->fornecedor->nome}}</td>
                    <td>{{$produto->fornecedor->site}}</td>
                    <td>{{$produto->peso}}</td>
                    <td>{{$produto->produtoDetalhe->comprimento ?? ''}}</td>
                    <td>{{$produto->produtoDetalhe->altura ?? ''}}</td>
                    <td>{{$produto->produtoDetalhe->largura ?? ''}}</td>
                    <td>
                        <a class="a-visualizar" href="{{ route('produto.show', ['produto' => $produto->id])}}">Visualizar</a>
                    </td>
                    <td>
                        <form id="form_{{$produto->id}}" method="post" action="{{route('produto.destroy', ['produto' => $produto->id])}}">
                            @method('DELETE')
                            @csrf
                        <a class="a-excluir" href="#" onclick="document.getElementById('form_{{$produto->id}}').submit()">Excluir</a>
                        </form>
                    </td>
                    <td>
                        <a class="a-editar" href="{{route('produto.edit', ['produto' => $produto->id])}}">Editar</a>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>

        {{ $produtos->appends($request)->links() }}

        <br>
        Exibindo  {{ $produtos->count() }} produtos de {{ $produtos->total() }} (de {{ $produtos->firstItem() }} a {{$produtos->lastItem()}})
       </div>

    </div>

</div>


@endsection