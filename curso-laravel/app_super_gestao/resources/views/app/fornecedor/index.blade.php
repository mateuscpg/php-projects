<h3>Fornecedor</h3>



@isset($fornecedores)

@php
 $i = 0 
@endphp
    @forelse($fornecedores as $fornecedor)
               
        Fornecedor: {{$fornecedor['nome'] }} 
        <br/>
        Status: {{$fornecedor['status'] }}
        <br/>
        CNPJ: {{$fornecedor['cnpj'] ?? 'Dado não preenchido'}}
        <br/>
        Telefone: ({{$fornecedor['ddd'] ?? ''}}) {{$fornecedor['telefone'] ?? ''}} - 
        @switch($fornecedores[1]['ddd'])
            @case('11')
                São Paulo - SP
                @break
            @case('83')
                João Pessoa - PB
                @break
            @case('32')
                Juíz De Fora - MG
            @default

        @endswitch
        <hr>

        @empty
            Não existem fornecedores cadastrados
       
    @endforelse

@endisset


   




