<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $todos= User::all();
        return $todos;
    }

    public function create(Request $request)
    {
        $usuario = User::create($request->all());
        return $usuario;
    }

    public function delete(User $id)
    {
        $id->delete();
        return 'Deletado';
    }

    public function update(Request $request, $id)
    {
        User::where('id',$id)->update($request->all());
        return 'Atualizado!';
    }
}
