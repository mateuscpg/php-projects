<x-layout page="Tela de Login">
    <x-slot:btn>
        <a href="{{route('register')}}" class="btn btn-primary">
            Registre-se
        </a>
    </x-slot:btn>
    TELA DE LOGIN
    <a href="{{route('home')}}">
        Ir para home
    </a>
</x-layout>
