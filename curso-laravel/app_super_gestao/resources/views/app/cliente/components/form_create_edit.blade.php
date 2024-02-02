@if (isset($cliente->id))

    <form action="{{route('cliente.update', ['cliente' => $cliente->id])}}" method="post">

        <h2>Editar</h2>
        @csrf
        @method('PUT')

    @else

        <form action="{{route('cliente.store')}}" method="post">
        <h2 class="tittle_form">ADICIONAR</h2>
        @csrf

    @endif

        {{$errors->has('nome') ? $errors->first('nome') : ''}}
        <input type="text" value="{{$cliente->nome ?? old('nome')}}" name="nome" placeholder="Digite um nome" class="borda-preta">
       
        
        <button type="submit" class="borda-preta">Cadastrar / Editar</button>
        </form>