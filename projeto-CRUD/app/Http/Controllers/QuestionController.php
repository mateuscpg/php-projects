<?php

namespace App\Http\Controllers;

use App\Models\Question;

use Illuminate\Http\Request;

class QuestionController extends Controller
{
    public function index(Request $request)
    {
        $questoes= Question::all();
        return $questoes;
    }

    public function create(Request $request)
    {
        $questao = Question::create($request->all());
        return $questao;
    }

    public function delete(Question $id)
    {
        $id->delete();
        return 'Deletado';
    }

    public function update(Request $request,  $id)
    {
        Question::where('id',$id)->update($request->all());
        return $request->all();
    }


}
