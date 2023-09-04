@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header d-flex justify-content-center">
                    Editar Tarefa
                </div>
                <div class="card-body">
                    <form method="post" action="{{route('tarefa.update', ['tarefa'=> $tarefa->id]) }}">
                        @csrf
                        @method('PUT')
                        <div class="form-group">
                            <label class="form-label">Tarefa</label>
                            <input type="text" value="{{ $tarefa->tarefa }}" class="form-control" name="tarefa" placeholder="Adicione uma tarefa">
                            {{$errors->has('tarefa') ? $errors->first('tarefa') : ''}}
                        </div>
                        <div class="form-group">
                            <label class="form-label">Data limite</label>
                            <input type="date" value="{{ $tarefa->data_limite_conclusao }}" class="form-control" name="data_limite_conclusao">
                            {{$errors->has('data_limite_conclusao') ? $errors->first('data_limite_conclusao') : ''}}
                        </div>
                        <button type="submit" class="btn btn-primary">Atualizar</button>
                      </form>


                </div>
            </div>
        </div>
    </div>
</div>
@endsection
