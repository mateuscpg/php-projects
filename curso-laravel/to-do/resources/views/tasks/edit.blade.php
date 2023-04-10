<x-layout page="Tela de Editar">
    <x-slot:btn>
        <a href="{{route('home')}}" class="btn btn-primary">
            Voltar para Home
        </a>
    </x-slot:btn>
    <section id="task_section">
        <h1> Editar Tarefa</h1>

        <form method="POST" action="{{route('tasks.edit_action')}}">
            @csrf
            <input type="hidden" name="id" value="{{$task->id}}">

            {{--     Marcação se estar feita ou não--}}
            <x-form.checkbox_input name="is_done"
                               label="Tarefa realizada?"
                               checked="{{$task->is_done}}"
            />
            {{--            Título da Task--}}
            <x-form.text_input name="title"
                               label="Título da tarefa"
                               placeholder="Digite o título da tarefa"
                               value="{{$task->title}}"
            />

            {{--            Data de realização--}}
            <x-form.text_input name="due_date"
                               type="datetime-local"
                               label="Data de realização"
                               value="{{$task->due_date}}"
            />



            {{--            Selecionar categoria--}}
            <x-form.select_input name="category_id"
                                 label="Categoria"
                                 placeholder="Digite a data de realização"
                                 value="{{$task->category_id}}"
            >
                @foreach($categories as $category)
                    <option value="{{$category->id}}"
                    @if($category->id == $task->category_id)
                    selected
                    @endif
                    >{{$category->title}}</option>
                @endforeach
            </x-form.select_input>

            {{--            Adicionar descrição--}}
            <x-form.textarea_input name="description"
                                   label="Descrição da tarefa"
                                   placeholder="Digite a descrição da sua tarefa"
                                   value="{{$task->description}}"
            />

            {{--            Botão para enviar e resetar a tarefa--}}
            <x-form.form_button resetTxt="Resetar" submitTxt="Atualizar tarefa"/>
        </form>
    </section>
</x-layout>
