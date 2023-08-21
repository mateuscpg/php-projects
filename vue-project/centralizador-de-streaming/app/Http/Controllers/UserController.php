<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function createUser(Request $request)
{
    
    // $validatedData = $request->validate([
    //     'name' => 'required|string',
    //     'email' => 'required|email|unique:users',
    //     'password' => 'required|string',
    //     'birth' => 'required|string',
    //     'hbo' => 'required',
    //     'netflix' => 'required',
    //     'primevideo' => 'required',
    //     'paramount' => 'required',
    //     'starplus' => 'required',
    // ]);
    User::create([
        'name' => $request['name'],
        'email' => $request['email'],
        'photo' => $request['photo'],
        'password' => Hash::make($request['password']),
        'birth' => $request['birth'],
        'id_cms_privileges' => 2,
        'id_netflix' => $request['netflix'],
        'id_hbo' => $request['hbo'],
        'id_primevideo' => $request['primevideo'],
        'id_paramount' => $request['paramount'],
        'id_starplus' => $request['starplus'],
    ]);

    return response()->json(['message' => 'User created successfully']);
}

public function login(Request $request)
{
    $credentials = $request->only('email', 'password');

    if (Auth::attempt($credentials)) {
        $user_auth = Auth::user();
        return response()->json(["success" => true, 'user_auth' => $user_auth]);
    } else {
        return response()->json(["success" => false, 'message' => 'Credenciais inválidas'], 400);
    }
}


}
