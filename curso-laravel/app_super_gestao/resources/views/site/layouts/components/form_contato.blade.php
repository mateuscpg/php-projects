<form action="{{route('site.contato')}}" method="post">
    @csrf
    {{$slot}}

    {{$errors->has('nome') ? $errors->first('nome') : ''}}
    <input name="nome" value="{{old('nome')}}" type="text" placeholder="Nome" class="{{ $class }}">
    <br>

    {{$errors->has('telefone') ? $errors->first('telefone') : ''}}
    <input name="telefone" value="{{old('telefone')}}" type="text" placeholder="Telefone" class="{{ $class }}">
    <br>
    
    
    {{$errors->has('email') ? $errors->first('email') : ''}}
    <input name="email" value="{{old('email')}}" type="text" placeholder="E-mail" class="{{ $class }}">
    <br>
    
    
    {{$errors->has('motivo_contatos_id') ? $errors->first('motivo_contatos_id') : ''}}
    <select name="motivo_contatos_id" value="{{old('motivo_contato')}}" class="{{ $class }}">
        <option value="">Qual o motivo do contato?</option>
        @foreach ( $motivo_contatos as $key => $motivo_contato)
        <option value="{{ $motivo_contato->id }}" {{old('motivo_contatos_id') == $motivo_contato->id ? 'selected' : ''}}>{{$motivo_contato->motivo_contato}}</option>    
        @endforeach
    </select>
    <br>
    
    
    {{$errors->has('mensagem') ? $errors->first('mensagem') : ''}}
    <textarea name="mensagem" 
    placeholder="Preencha aqui a sua mensagem"
    class="{{ $class }}"></textarea>
    <br>

    <button type="submit" class="{{ $class }}">ENVIAR</button>
</form>

{{-- @if($errors->any())
    <div style="position: absolute; border-radius:15px; text-align:center; top:100px; left: 0px; width: 35%; background: rgb(255, 43, 43)">
    @foreach ( $errors->all() as $error)
        {{$error}} 
        <br/>
    @endforeach   
</div>
@endif --}}