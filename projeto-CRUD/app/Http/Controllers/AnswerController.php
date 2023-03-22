<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use Illuminate\Http\Request;

class AnswerController extends Controller
{
    public function index(Request $request)
    {
        $respostas = Answer::all();
        return $respostas;
    }

    public function create(Request $request)
    {
        $resposta = Answer::create($request->all());
        return $resposta;
    }

    public function delete(Answer $id)
    {
        $id->delete();
        return 'Deletado';
    }

    public function update(Request $request)
    {
        Answer::where('id', $request['id'])->update($request->all());
        return 'Atualizado!';
    }
}
