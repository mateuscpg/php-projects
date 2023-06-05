
<form action="{{route('pedido-produto.store', ['pedido'=> $pedido])}}" method="post">
    <h2>ADICIONAR</h2>
    @csrf

    {{$errors->has('produto_id') ? $errors->first('produto_id') : ''}}
    <select name="produto_id"> 
        <option>-- Selecione um produto</option>
        
        @foreach ($produtos as $produto)
        <option value="{{$produto->id}}" {{ old('produto_id') == $produto->id ? 'selected': ''}} >{{$produto->nome}}</option>
        @endforeach
    </select>
    <input type="number" name="quantidade" value="{{old('quantidade') ? old('quantidade') : ''}}" placeholder="Digite a quantidade" class="borda-preta">
    {{$errors->has('quantidade') ? $errors->first('quantidade') : ''}}


    <button type="submit" class="borda-preta">Cadastrar / Editar</button>
</form>