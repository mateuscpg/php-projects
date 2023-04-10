<?php

namespace App\Http\Controllers;

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


        $data['tasks'] = Task::whereDate('due_date', $fileredDate )->get();
        $data['AuthUser'] = Auth::user();

        $data['tasks_count'] = $data['tasks']->count();
        $data['undone_tasks_count'] = $data['tasks']->where('is_done', false)->count();
        return view('home', $data);
    }


}
