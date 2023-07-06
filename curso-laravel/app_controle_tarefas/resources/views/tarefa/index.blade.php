@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header d-flex justify-content-center">Lista de tarefas</div>
                <div class="card-body">
                    
                    
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Tarefa</th>
                                <th scope="col">Data de conclusão</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($tarefas as $tarefa)
                          <tr>
                            <th scope="row">{{$tarefa->id}}</th>
                            <td>{{$tarefa->tarefa}}</td>
                            <td>{{ date('d/m/Y', strtotime($tarefa->data_limite_conclusao )) }}</td>
                          </tr>
                          @endforeach
                        </tbody>
                      </table>
                    </div>
                    {{$tarefas->links()}}
                </div>
    </div>
</div>
@endsection
