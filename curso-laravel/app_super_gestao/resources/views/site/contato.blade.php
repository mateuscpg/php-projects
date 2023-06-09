@extends('site.layouts.basico')

@section('titulo', $titulo)
    
@section('conteudo')


    <div class="conteudo-pagina">
        <div class="titulo-pagina">
            <h1>Entre em contato conosco</h1>
        </div>

        <div class="informacao-pagina">
            <div class="contato-principal">
                @component('site.layouts.components.form_contato', ['class'=> 'borda-preta', 'motivo_contatos' => $motivo_contatos])
                <p style="color: black">A nossa equipe analisará sua mensagem e retornaremos o mais brevemente possível</p>
                <p style="color: black">Nosso tempo médio de resposta é de 48 horas</p>
                @endcomponent
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
            <h2>(11) 3333-4444</h2>
            <h2>supergestao@dominio.com.br</h2>
        </div>
        <div class="localizacao">
            <h2>Localização</h2>
            <img src="{{asset('img/mapa.png')}}">
        </div>
    </div> 
@endsection
