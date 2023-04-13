<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\Task;
use Illuminate\Support\Facades\Auth;


class HomeController extends Controller
{
    public function index(Request $request)
    {
        if($request->date){
            $fileredDate = $request->date;
        }else{
            $fileredDate = date('Y-m-d');
        }

//                    Definindo datas
        $carbonDate = Carbon::createFromDate($fileredDate);
//             Datas para atribuir aos dos botões:
//          * translatedFormat para traduzir do inglê para
//            o português, para ficar melhor para o usuário ver
        $data['date_as_string'] = $carbonDate->translatedFormat('d').' de '.ucfirst($carbonDate->translatedFormat('M'));
//        *-1 para atribuir ao dia anterior
        $data['date_prev_button'] = $carbonDate->addDay(-1)->format('Y-m-d');
//       * 2 porque a data quando posta -1 ela vira 'ontem', se pôr +1
//        ela vira 'hoje', então por lógica, pôr +2 para se tornar o dia
//        de 'amanhã'.
        $data['date_next_button'] = $carbonDate->addDay(2)->format('Y-m-d');

        $data['tasks'] = Task::whereDate('due_date', $fileredDate )->get();
        $data['AuthUser'] = Auth::user();

        $data['tasks_count'] = $data['tasks']->count();
        $data['undone_tasks_count'] = $data['tasks']->where('is_done', false)->count();
        return view('home', $data);
    }


}