<x-layout>
        <x-slot:btn>
            <div class="nav_home">
            <span class="welcome">Seja bem vindo {{$AuthUser->name}}</span>
           <div>
               <a href="{{route('tasks.create')}}" class="btn btn-primary">
                Criar tarefa
            </a>
            <a href="{{route('logout')}}" class="btn btn-primary">
                Sair
            </a>
           </div>
            </div>
        </x-slot:btn>

    {{--        Div do lado esquerdo    --}}
    <section class="graph">
        <div class="graph_header">
            <h2>Progresso do dia</h2>
            <div class="graph_header-line"></div>
            <div class="graph_header-date">


                {{--                Botões para passar a data--}}
                <a href="{{route('home', ['date' => $date_prev_button])}}">
                    <img src="/assets/images/icon-prev.png"/>
                </a>
                {{$date_as_string}}
                <a href="{{route('home', ['date' => $date_next_button])}}">
                    <img src="/assets/images/icon-next.png"/>
                </a>
            </div>
        </div>
        <div class="graph_header_subtitle">Tarefas: <b>{{$tasks_count - $undone_tasks_count}}/{{$tasks_count}}</b></div>

{{--                Gráfico de progresso--}}
        <div class="graph-placeholder">
            <div class="ui-values">50%</div>
            <div class="ui-labels">Completo</div>
        </div>

        <div class="tasks_left_footer">
            <img src="assets/images/icon-info.png"/>
            Restam {{$undone_tasks_count}} tarefas para serem realizadas
        </div>
    </section>

    {{--            Lista--}}
    <section class="list">
        <div class="list_header">
            <select class="list_header-select" onChange="changeTaskStatusFilter(this)">
                <option value="all_task">Todas as tarefas</option>
                <option value="task_pending">Tarefas pendentes</option>
                <option value="task_done">Tarefas realizadas</option>
            </select>
        </div>
        <div class="task_list">
            @foreach($tasks as $task)
                <x-task :data=$task/>
            @endforeach


        </div>
    </section>
    <script>
        // Opções das tarefas
        function changeTaskStatusFilter(element) {
            if (element.value == 'task_pending') {
                showAllTasks();
                document.querySelectorAll('.task_done').forEach(function (e) {
                    e.style.display = 'none';
                })
            } else if (element.value == 'task_done') {
                showAllTasks();
                document.querySelectorAll('.task_pending').forEach(function (e) {
                    e.style.display = 'none';
                })
            } else {
                showAllTasks();
            }
        }

        function showAllTasks() {
            document.querySelectorAll('.task').forEach(function (e) {
                e.style.display = 'flex';
            })
        }

    </script>
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
            if (result.success) {

            } else {
                element.checked = !status;
            }
        }
    </script>


</x-layout>
