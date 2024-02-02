@if (isset($pedido->id))

    <form action="{{route('pedido.update', ['pedido' => $pedido->id])}}" method="post">

        <h2>Editar</h2>
        @csrf
        @method('PUT')

    @else

        <form action="{{route('pedido.store')}}" method="post">
        <h2 class="tittle_form">ADICIONAR</h2>
        @csrf

    @endif

        {{$errors->has('cliente_id') ? $errors->first('cliente_id') : ''}}
        <select name="cliente_id"> 
            <option>-- Selecione um cliente</option>

            @foreach ($clientes as $cliente)
                <option value="{{$cliente->id}}" {{ ($pedido->cliente_id ?? old('cliente_id')) == $cliente->id ? 'selected': ''}} >{{$cliente->nome}}</option>
            @endforeach
        </select>
       
        
        <button type="submit" class="borda-preta">Cadastrar / Editar</button>
        </form>