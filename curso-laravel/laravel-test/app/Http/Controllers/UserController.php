<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function getUsers()
    {
        return response()->json(User::all());
    }

    public function createUser(Request $request)
    {
        User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => Hash::make($request['password'])
        ]);

        return response()->json(['message' => 'Usuário criado com sucesso!'], 200);
    }
    public function getUser($id)
    {
        try {
            $user = User::findOrFail($id);
            return response()->json(['user' => $user], 200);
        }
        catch(Exception $e) {
            return response()->json([$e->getMessage()], 500);
        }
    }
    public function add($a, $b)
    {
        return $a + $b;
    }
    public function multiple($a , $b)
    {
        return $a * $b;
    }
}
