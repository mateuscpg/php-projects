@if (isset($produto_detalhe->id))

    <form action="{{route('produto-detalhe.update', ['produto_detalhe' => $produto_detalhe->id])}}" method="post">

        <h2>Editar</h2>
        @csrf
        @method('PUT')

    @else

        <form action="{{route('produto-detalhe.store')}}" method="post">
        <h2>ADICIONAR</h2>
        @csrf

    @endif

        {{$errors->has('produto_id') ? $errors->first('produto_id') : ''}}
        <input type="text" value="{{$produto_detalhe->produto_id ?? old('produto_id')}}" name="produto_id" placeholder="ID do produto" class="borda-preta">
        
        {{$errors->has('comprimento') ? $errors->first('comprimento') : ''}}
        <input type="text" value="{{$produto_detalhe->comprimento ?? old('comprimento')}}" name="comprimento" placeholder="Digite o comprimento" class="borda-preta">
        
        {{$errors->has('largura') ? $errors->first('largura') : ''}}
        <input type="text" value="{{$produto_detalhe->largura ?? old('largura')}}" name="largura" placeholder="Digite o largura (inteiro)" class="borda-preta">

        {{$errors->has('altura') ? $errors->first('altura') : ''}}
        <input type="text" value="{{$produto_detalhe->altura ?? old('altura')}}" name="altura" placeholder="Digite o altura (inteiro)" class="borda-preta">
        
        {{$errors->has('unidade_id') ? $errors->first('unidade_id') : ''}}
        <select name="unidade_id"> 
            <option>-- Selecione a unidade de Medida</option>

            @foreach ($unidades as $unidade)
                <option value="{{$unidade->id}}" {{ ($produto_detalhe->unidade_id ?? old('unidade_id')) == $unidade->id ? 'selected': ''}} >{{$unidade->descricao}}</option>
            @endforeach
        </select>
        
        <button type="submit" class="borda-preta">Cadastrar / Editar</button>

        </form>