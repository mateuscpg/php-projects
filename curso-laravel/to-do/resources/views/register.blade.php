<x-layout page="Tela de registro">
    <x-slot:btn>
        <a href="{{route('login')}}" class="btn btn-primary">
            Já possui conta? Faça login
        </a>
    </x-slot:btn>

    <section id="task_section">
        <h1> Registro</h1>

        <form method="POST" action="{{route('users.register_action')}}">
            @csrf
            @if($errors->any())
                <ul class="alert alert-error">
                    @foreach($errors->all() as $error)
                        <li>{{$error}}</li>
                    @endforeach
                </ul>
            @endif

            {{--            Nome da pessoa      --}}
            <x-form.text_input name="name"
                               label="Nome"
                               placeholder="Seu nome"
            />

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

{{--                     Confirmação de senha --}}
            <x-form.text_input name="password_confirmation"
                               type="password"
                               label="Confirme sua senha"
                               placeholder="Confirme sua senha"
            />


            {{--            Botão para registrar-se ou limpar os campos--}}
            <x-form.form_button resetTxt="Limpar" submitTxt="Registrar-se"/>
        </form>
    </section>
</x-layout>
