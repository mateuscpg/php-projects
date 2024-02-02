@if (isset($produto->id))

    <form action="{{route('produto.update', ['produto' => $produto->id])}}" method="post">

        <h2>Editar</h2>
        @csrf
        @method('PUT')

    @else

        <form action="{{route('produto.store')}}" method="post">
        <h2 class="tittle_form">ADICIONAR</h2>
        @csrf

    @endif

        {{$errors->has('nome') ? $errors->first('nome') : ''}}
        <input type="text" value="{{$produto->nome ?? old('nome')}}" name="nome" placeholder="Digite um nome" class="borda-preta">
        
        {{$errors->has('descricao') ? $errors->first('descricao') : ''}}
        <input type="text" value="{{$produto->descricao ?? old('descricao')}}" name="descricao" placeholder="Digite uma descricao" class="borda-preta">
        
        {{$errors->has('peso') ? $errors->first('peso') : ''}}
        <input type="text" value="{{$produto->peso ?? old('peso')}}" name="peso" placeholder="Digite o peso (inteiro)" class="borda-preta">
        
        {{$errors->has('unidade_id') ? $errors->first('unidade_id') : ''}}
        <select name="unidade_id"> 
            <option>-- Selecione a unidade de Medida</option>
            @foreach ($unidades as $unidade)
            <option value="{{$unidade->id}}" {{ ($produto->unidade_id ?? old('unidade_id')) == $unidade->id ? 'selected': ''}} >{{$unidade->descricao}}</option>
                
            @endforeach
        </select>
        
        {{$errors->has('fornecedor_id') ? $errors->first('fornecedor_id') : ''}}
        <select name="fornecedor_id"> 
            <option>-- Selecione um fornecedor --</option>
            @foreach ($fornecedores as $fornecedor)
            <option value="{{$fornecedor->id}}" {{ ($produto->fornecedor_id ?? old('fornecedor_id')) == $fornecedor->id ? 'selected': ''}} >{{$fornecedor->nome}}</option>
                
            @endforeach
        </select>
        
        <button type="submit" class="borda-preta">Cadastrar / Editar</button>
        </form>