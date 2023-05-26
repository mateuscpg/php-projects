
@extends('app.layouts.basico')

@section('titulo', 'Fornecedor')
    
@section('conteudo')

<div class="conteudo-pagina">
    
    <div class="titulo-pagina-2">
        <h1>Fornecedor</h1>
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
         <form action="{{route('app.fornecedor.adicionar')}}" method="post">
            <h2>ADICIONAR / EDITAR</h2>
            <input type="hidden" name="id" value="{{$fornecedor->id ?? ''}}">
            @csrf
            {{$errors->has('nome') ? $errors->first('nome') : ''}}
            <input type="text" value="{{$fornecedor->nome ?? old('nome')}}" name="nome" placeholder="Digite um nome" class="borda-branca">

            {{$errors->has('site') ? $errors->first('site') : ''}}
            <input type="text" value="{{$fornecedor->site ?? old('site')}}" name="site" placeholder="Digite um site" class="borda-branca">

            {{$errors->has('uf') ? $errors->first('uf') : ''}}
            <input type="text" value="{{$fornecedor->uf ?? old('uf')}}" name="uf" placeholder="Digite uma uf" class="borda-branca">

            {{$errors->has('email') ? $errors->first('email') : ''}}
            <input type="text" value="{{$fornecedor->email ?? old('email')}}" name="email" placeholder="Digite um email" class="borda-branca">
            
            <button type="submit" class="borda-preta">Cadastrar / Editar</button>
            {{$msg ?? ''}}
         </form>

       </div>

    </div>

</div>


@endsection