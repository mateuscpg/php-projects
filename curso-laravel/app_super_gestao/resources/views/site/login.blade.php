@extends('site.layouts.basico')

@section('titulo', $titulo)
    
@section('conteudo')


    <div class="conteudo-pagina">
        <div class="titulo-pagina">
        </div>
        
        <h1>Login</h1>
        <div class="informacao-pagina">
            <div style="
                background-color:aliceblue; 
                padding: 25px; 
                border-radius: 20px 0px 20px 0px;
                width: 30%; 
                margin-left: auto;
                margin-right: auto;
                ">
                <form action={{route('site.login')}} method="post">
                    @csrf

                    {{$errors->has('email') ? $errors->first('email') : ''}}
                    <input name="email" type="text" value="{{old('email')}}" placeholder="Digite o email" class="borda-branca">

                    {{$errors->has('senha') ? $errors->first('senha') : ''}}
                    <input name="senha" type="password" value="{{old('senha')}}" placeholder="Digite a senha" class="borda-branca">

                    <p style="font-size: 12px; text-align:left">
                        <a href="" class="link">Esqueceu sua senha?</a>
                    </p>
                    <button type="submit" class="borda-preta">Acessar</button>
                </form>
                {{isset($erro) && $erro != '' ? $erro : ''}}
            </div>
        </div>  
    </div>

    <div class="rodape">
        <div class="redes-sociais">
            <h2>Redes sociais</h2>
            <img src="{{asset('img/facebook.png')}}">
            <img src="{{asset('img/linkedin.png')}}">
            <img src="{{asset('img/youtube.png')}}">
        </div>
        <div class="area-contato">
            <h2>Contato</h2>
            <span>(11) 3333-4444</span>
            <br>
            <span>supergestao@dominio.com.br</span>
        </div>
        <div class="localizacao">
            <h2>Localização</h2>
            <img src="{{asset('img/mapa.png')}}">
        </div>
    </div> 
@endsection
