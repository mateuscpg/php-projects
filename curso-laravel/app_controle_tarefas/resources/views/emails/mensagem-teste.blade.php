@component('mail::message')
# Introdução

O corpo da mensagem a ser mostrado


@component('mail::button', ['url' => ''])
Texto do botão
@endcomponent

Obrigado,<br>
{{ config('app.name') }}
@endcomponent
