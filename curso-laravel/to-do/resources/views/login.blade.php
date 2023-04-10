<x-layout page="Tela de Login">

    <x-slot:btn>
        <a href="{{route('register')}}" class="btn btn-primary">
            Registre-se
        </a>
    </x-slot:btn>

    <section id="task_section">
        <h1> Login </h1>
        @if($errors->any())
            <ul class="alert alert-error">
                @foreach($errors->all() as $error)
                    <li>{{$error}}</li>
                @endforeach
            </ul>
        @endif

        <form method="POST" action="{{route('users.login_action')}}">
            @csrf

            {{--            Email da pessoa--}}
            <x-form.text_input name="email"
                               type="email"
                               label="Email"
                               placeholder="Seu email"
            />
            {{--                         Senha da pessoa --}}
            <x-form.text_input name="password"
                               type="password"
                               label="Senha"
                               placeholder="Sua senha"
            />


            {{--            Botão para registrar-se ou limpar os campos--}}
            <x-form.form_button resetTxt="Limpar" submitTxt="Acessar"/>
        </form>
    </section>
</x-layout>
