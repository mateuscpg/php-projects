<x-layout>

    <x-slot:btn>
        <a href="{{route('tasks.create')}}" class="btn btn-primary">
            Criar tarefa
        </a>
        <a href="{{route('logout')}}" class="btn btn-primary">
            Sair
        </a>
    </x-slot:btn>

    {{--            Gráfico--}}
    <section class="graph">
        <div class="graph_header">
            <h2>Progresso do dia</h2>
            <div class="graph_header-line"></div>
            <div class="graph_header-date">

                <img src="/assets/images/icon-prev.png"/>
                05 de Abr
                <img src="/assets/images/icon-next.png"/>
            </div>
        </div>
        <div class="graph_header_subtitle">Tarefas: <b>{{$tasks_count - $undone_tasks_count}}/{{$tasks_count}}</b></div>

        <div class="graph-placeholder">
        </div>

        <div class="tasks_left_footer">
            <img src="assets/images/icon-info.png"/>
            Restam {{$undone_tasks_count}} tarefas para serem realizadas
        </div>
    </section>

    {{--            Lista--}}
    <section class="list">
        <div class="list_header">
            <select class="list_header-select">
                <option value="1">Todas as tarefas</option>
            </select>
        </div>
        <div class="task_list">
            @foreach($tasks as $task)
                <x-task :data=$task/>
            @endforeach


        </div>
    </section>
    <script>
        async function taskUpdate(element) {
            let status = element.checked;
            let taskId = element.dataset.id;
            let url = '{{route ('tasks.update')}}';
            let rawResult = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'accept': 'application/json'
                },
                body: JSON.stringify({status, taskId, _token: '{{ csrf_token() }}'})
            });
             result = await rawResult.json();
            if(result.success){
                alert('Task atualizada com sucesso!');
            }else {
                element.checked = !status;
            }
        }
    </script>
</x-layout>
