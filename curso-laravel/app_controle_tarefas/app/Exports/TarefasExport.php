<?php

namespace App\Exports;

use App\Models\Tarefa;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class TarefasExport implements FromCollection, WithHeadings, WithMapping
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Tarefa::all()->where('user_id', '=', auth()->id());
    }

    public function headings():array //declarando o tipo de retorno
    {
        return ['ID', 'Tarefa', 'Data de limite da conclusão']; //Nomes das tabelas, pode inclusive, adicionar mais
    }

    public function map($linha):array {  //Aqui você percorre cada linha e seleciona apenas o que quer mostrar,
                                         // podendo adicionar mais coisas a cada linha.   
        return [
            $linha->id,
            $linha->tarefa,
            date('d/m/Y', strtotime($linha->data_limite_conclusao)),
        ];

        
    }

}
