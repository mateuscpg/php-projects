<div class="task">
    <div class="title">
        <input type='checkbox'
               onchange="taskUpdate(this)"
               data-id="{{$data['id']}}"
        @if($data && $data['is_done'])
          checked
        @endif
        />
        <div class="task_title">{{$data['title'] ?? ''}} </div>
    </div>
    <div class="priority">
        <div class="sphere"></div>
        <div class="">{{$data ['category']-> title ?? ''}}</div>
    </div>
    <div class="actions">
        {{--                            ícone de editar--}}
        <a href="{{route('tasks.edit', ['id'=> $data['id']])}}">
            <img src="/assets/images/icon-edit.png"/>
        </a>
        {{--                            ícone de deletar--}}
        <a href="{{route('tasks.delete', ['id' => $data['id']])}}">
            <img src="/assets/images/icon-delete.png"/>
        </a>
    </div>


</div>
