@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">

                <div class="card-header">Lista de tarefas <a class="float-right" href="{{ route('tarefa.create') }}">Nova Tarefa</a></div>
                
                <div class="card-body">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Tarefa</th>
                                <th scope="col">Data de conclusão</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($tarefas as $tarefa)
                          <tr>
                            <th scope="row">{{$tarefa->id}}</th>
                            <td>{{$tarefa->tarefa}}</td>
                            <td>{{ date('d/m/Y', strtotime($tarefa->data_limite_conclusao )) }}</td>
                            <td> <a href="{{route('tarefa.edit', $tarefa->id)}}">Editar</a></td>
                            <td>
                                <form id="form_{{$tarefa->id}}" method="post" action="{{route('tarefa.destroy', [$tarefa->id]) }}">
                                    @method('DELETE')
                                    @csrf
                                </form>
                                <a href="#" onclick="document.getElementById('form_{{$tarefa->id}}').submit()" >Excluir</a>
                            </td>
                          </tr>
                          @endforeach
                        </tbody>
                      </table>

                      @if ($tarefas->total() > $tarefas->perPage())
                      <nav style="display: flex; justify-content:center">
                        <ul class="pagination">
                          <li class="page-item">
                            <a class="page-link" href="{{ $tarefas->previousPageUrl() }}" aria-label="Previous">
                              <span aria-hidden="true">&laquo;</span>
                              <span class="sr-only">Previous</span>
                            </a>
                          </li>
                        
                          @for ( $i = 1; $i <= $tarefas->lastPage(); $i++)
                            <li class="page-item {{ $tarefas->currentPage() == $i ? 'active' : '' }} ">
                                <a class="page-link" href="{{ $tarefas->url($i) }}">{{ $i }}</a>
                            </li>    
                          @endfor

                          <li class="page-item">
                            <a class="page-link" href="{{$tarefas->nextPageUrl() }}" aria-label="Next">
                              <span aria-hidden="true">&raquo;</span>
                              <span class="sr-only">Next</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                      @endif
                      
                    </div>
                </div>
    </div>
</div>
@endsection
